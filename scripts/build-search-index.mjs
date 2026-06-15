/**
 * build-search-index.mjs
 *
 * Phase 4 infra: build the agent-facing search index for grandocs.
 *
 * Walks every Markdown doc under src/content/docs, parses frontmatter, and
 * emits two artifacts under public/agent/:
 *
 *   - search-index.json : a serialized MiniSearch index (MiniSearch.toJSON())
 *                         over title / headings / excerpt, with id, title,
 *                         product, version, url and mdUrl stored on each hit.
 *   - meta.json         : the product/version/lang matrix plus record counts,
 *                         so an agent can discover what is indexed without
 *                         loading the (larger) index itself.
 *
 * Scope rules:
 *   - grandMA3: latest only (version 2.4 / verDir "2-4"); older trees skipped.
 *   - grandma2 / dot2 / utility / network: all pages.
 *   - Any page with frontmatter `pagefind: false` is skipped.
 *
 * Run: node scripts/build-search-index.mjs
 * Intended to run during `pnpm build` (before/after `astro build`) so the
 * static site ships the index at /agent/search-index.json.
 *
 * Deps (plain Node ESM, no Astro runtime): minisearch, gray-matter.
 */

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { join, relative, sep, posix } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import MiniSearch from 'minisearch'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DOCS_DIR = join(ROOT, 'src', 'content', 'docs')
const OUT_DIR = join(ROOT, 'public', 'agent')
const INDEX_PATH = join(OUT_DIR, 'search-index.json')
const META_PATH = join(OUT_DIR, 'meta.json')

const SITE = 'https://grandocs.samcarlton.com'

// Recognized products. The leading path segment under docs/ must be one of
// these for a file to be indexed (this also drops top-level pages such as
// index.mdx and building-with-ai.md, which aren't product docs).
const PRODUCTS = new Set(['grandma3', 'grandma2', 'dot2', 'utility', 'network'])

// grandMA3 is versioned under a verDir; index the latest only.
const GRANDMA3_LATEST_VERDIR = '2-4'

const EXCERPT_LEN = 300
const MAX_BYTES = 10 * 1024 * 1024 // 10MB hard ceiling we warn past.

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Recursively yield absolute paths of *.md / *.mdx files under `dir`. */
async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name)
		if (entry.isDirectory()) {
			yield* walk(p)
		} else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
			yield p
		}
	}
}

/**
 * Map an absolute content file path to its site path (no leading/trailing slash,
 * no extension), matching the MCP worker's StoredDoc.path contract.
 * e.g. <docs>/grandma3/2-4/cue_store.md -> "grandma3/2-4/cue_store"
 *      <docs>/grandma2/index.md         -> "grandma2"   (Starlight drops /index)
 */
function sitePathFor(absPath) {
	const rel = relative(DOCS_DIR, absPath)
	const noExt = rel.replace(/\.mdx?$/, '')
	// Normalize separators and drop a trailing "/index" (Starlight serves it at the dir root).
	return noExt.split(sep).join('/').replace(/\/index$/, '')
}

/** Pull the "## heading" / "### heading" text out of markdown body. */
function extractHeadings(body) {
	const out = []
	const re = /^[ \t]{0,3}#{2,6}[ \t]+(.+?)[ \t]*#*\s*$/gm
	let m
	while ((m = re.exec(body)) !== null) {
		out.push(stripInline(m[1]))
	}
	return out.join(' ')
}

/** Strip inline markdown markup down to readable text (best-effort). */
function stripInline(s) {
	return s
		// images: ![alt](url) -> alt
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		// links: [text](url) -> text
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		// reference links: [text][ref] -> text
		.replace(/\[([^\]]*)\]\[[^\]]*\]/g, '$1')
		// inline code: `code` -> code
		.replace(/`+([^`]*)`+/g, '$1')
		// emphasis / bold markers
		.replace(/[*_]{1,3}/g, '')
		// escaped punctuation: \[ -> [
		.replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, '$1')
		.replace(/\s+/g, ' ')
		.trim()
}

/**
 * Produce a plain-text excerpt (~EXCERPT_LEN chars) from a markdown body:
 * drop headings, code fences, html comments, images and tables, then strip
 * inline markup and collapse whitespace.
 */
function makeExcerpt(body) {
	let s = body
		// fenced code blocks
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/~~~[\s\S]*?~~~/g, ' ')
		// html comments
		.replace(/<!--[\s\S]*?-->/g, ' ')
		// images on their own (alt kept by stripInline later for links)
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		// markdown headings
		.replace(/^[ \t]{0,3}#{1,6}[ \t]+.*$/gm, ' ')
		// horizontal rules
		.replace(/^[ \t]{0,3}([-*_])([ \t]*\1){2,}[ \t]*$/gm, ' ')
		// blockquote / list markers at line start
		.replace(/^[ \t]{0,3}(>|[-*+]|\d+\.)[ \t]+/gm, '')
		// table pipes / separators
		.replace(/^[ \t]{0,3}\|?[ \t]*:?-{2,}:?[ \t]*(\|[ \t]*:?-{2,}:?[ \t]*)*\|?[ \t]*$/gm, ' ')
		.replace(/\|/g, ' ')

	s = stripInline(s)
	if (s.length <= EXCERPT_LEN) return s
	// Cut on a word boundary near the limit.
	const cut = s.slice(0, EXCERPT_LEN)
	const lastSpace = cut.lastIndexOf(' ')
	return (lastSpace > EXCERPT_LEN * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + '…'
}

/** Is this file in scope given product + version path rules? */
function inScope(absPath, data) {
	const rel = relative(DOCS_DIR, absPath)
	const segments = rel.split(sep)
	const product = segments[0]

	if (!PRODUCTS.has(product)) return false

	// Honor the frontmatter product if present and recognized; otherwise the
	// path segment governs.
	const fmProduct = typeof data.product === 'string' ? data.product : product
	if (PRODUCTS.has(fmProduct) && fmProduct !== product) {
		// Frontmatter disagrees with path; trust the path for routing/scope.
	}

	if (product === 'grandma3') {
		// Expect grandma3/<verDir>/<slug>; index latest verDir only.
		const verDir = segments[1]
		if (verDir !== GRANDMA3_LATEST_VERDIR) return false
	}

	return true
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

async function main() {
	// Guard: ensure the content dir exists.
	try {
		await stat(DOCS_DIR)
	} catch {
		console.error(`[search-index] content dir not found: ${DOCS_DIR}`)
		process.exitCode = 1
		return
	}

	const documents = []
	const skipped = { pagefind: 0, outOfVersion: 0, nonProduct: 0, empty: 0 }

	// matrix: product -> version -> lang -> count
	const matrix = {}
	function tally(product, version, lang) {
		const v = version || '_'
		const l = lang || 'unknown'
		matrix[product] ??= {}
		matrix[product][v] ??= {}
		matrix[product][v][l] = (matrix[product][v][l] || 0) + 1
	}

	for await (const absPath of walk(DOCS_DIR)) {
		const rel = relative(DOCS_DIR, absPath)
		const product = rel.split(sep)[0]

		if (!PRODUCTS.has(product)) {
			skipped.nonProduct++
			continue
		}

		const raw = await readFile(absPath, 'utf-8')
		let parsed
		try {
			parsed = matter(raw)
		} catch (err) {
			console.warn(`[search-index] frontmatter parse failed, skipping ${rel}: ${err.message}`)
			continue
		}
		const { data, content } = parsed

		// pagefind:false opt-out (string 'false' or boolean false).
		if (data.pagefind === false || data.pagefind === 'false') {
			skipped.pagefind++
			continue
		}

		if (!inScope(absPath, data)) {
			skipped.outOfVersion++
			continue
		}

		const sitePath = sitePathFor(absPath)
		const title =
			(typeof data.title === 'string' && data.title.trim()) ||
			sitePath.split('/').pop() ||
			sitePath

		// Version is stored as the URL verDir segment ("2-4") so it matches both
		// the route and the MCP worker's version filters. grandMA3 is versioned
		// under its second path segment; other products are unversioned.
		const segments = sitePath.split('/')
		const version =
			product === 'grandma3' && segments[1] ? segments[1] : undefined

		const lang = typeof data.lang === 'string' ? data.lang : 'en'

		const headings = extractHeadings(content)
		const excerpt = makeExcerpt(content)

		if (!excerpt && !headings && !title) {
			skipped.empty++
			continue
		}

		documents.push({
			path: sitePath,
			title,
			product,
			version,
			lang,
			headings,
			excerpt,
		})

		tally(product, version, lang)
	}

	// Sort for deterministic output (stable index across rebuilds).
	documents.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0))

	// Build the MiniSearch index. idField/fields/storeFields MUST match the
	// MCP worker's MiniSearch.loadJSON() options (mcp/src/index.ts).
	const miniSearch = new MiniSearch({
		idField: 'path',
		fields: ['title', 'headings', 'excerpt'],
		storeFields: ['title', 'path', 'product', 'version', 'lang', 'excerpt'],
		searchOptions: {
			boost: { title: 3, headings: 2 },
			prefix: true,
			fuzzy: 0.2,
		},
	})
	miniSearch.addAll(documents)

	await mkdir(OUT_DIR, { recursive: true })

	const indexJson = JSON.stringify(miniSearch.toJSON())
	await writeFile(INDEX_PATH, indexJson)

	// Per-product counts for meta.
	const perProduct = {}
	for (const doc of documents) {
		perProduct[doc.product] = (perProduct[doc.product] || 0) + 1
	}

	const meta = {
		generatedAt: new Date().toISOString(),
		site: SITE,
		total: documents.length,
		products: perProduct,
		// product -> version -> lang -> count
		matrix,
		searchFields: ['title', 'headings', 'excerpt'],
		storeFields: ['title', 'path', 'product', 'version', 'lang', 'excerpt'],
		idField: 'path',
		urlPattern: `${SITE}/<path>/`,
		mdUrlPattern: `${SITE}/<path>.md`,
		indexFile: '/agent/search-index.json',
		notes:
			'Unofficial mirror of MA Lighting documentation. For authoritative or ' +
			'safety-relevant info (conformity, electrical, safety) always cite the ' +
			'canonical page at help.malighting.com (see each record\'s url -> sourceUrl).',
	}
	await writeFile(META_PATH, JSON.stringify(meta, null, 2))

	// Report.
	const bytes = Buffer.byteLength(indexJson)
	const mb = (bytes / 1024 / 1024).toFixed(2)
	console.log(`[search-index] indexed ${documents.length} pages`)
	console.log(
		`[search-index] skipped: pagefind=${skipped.pagefind} ` +
			`out-of-version=${skipped.outOfVersion} non-product=${skipped.nonProduct} ` +
			`empty=${skipped.empty}`,
	)
	for (const [product, count] of Object.entries(perProduct).sort()) {
		console.log(`[search-index]   ${product}: ${count}`)
	}
	console.log(`[search-index] wrote ${posix.normalize('public/agent/search-index.json')} (${mb} MB)`)
	console.log(`[search-index] wrote ${posix.normalize('public/agent/meta.json')}`)

	if (bytes > MAX_BYTES) {
		console.warn(
			`[search-index] WARNING: index is ${mb} MB, over the ${(MAX_BYTES / 1024 / 1024).toFixed(0)} MB budget. ` +
				'Consider trimming excerpt length or stored fields.',
		)
	}
}

main().catch((err) => {
	console.error('[search-index] fatal:', err)
	process.exitCode = 1
})
