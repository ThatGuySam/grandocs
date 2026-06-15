/**
 * grandocs crawler — enumerate official MA Lighting help topics from their
 * ToC trees, convert each page's content container to markdown, and emit
 * content files + sidebar JSON + manifests for delta resyncs.
 *
 * Usage:
 *   node scripts/crawl.ts                  # all default sources
 *   node scripts/crawl.ts grandma3:2.4     # one source
 *   node scripts/crawl.ts grandma2 dot2    # selected products
 */
import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

import { cleanMarkdown } from './lib/clean-md.mjs'
import { isBrandAsset } from './lib/branding.mjs'
import { select, selectAll } from 'hast-util-select'
import { toString as hastToString } from 'hast-util-to-string'
import pLimit from 'p-limit'
import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'
import { visit, SKIP } from 'unist-util-visit'

const LATEST_MA3 = '2.4'
const USER_AGENT =
	'grandocs-crawler/2.0 (+https://github.com/ThatGuySam/grandocs; unofficial docs mirror)'
const CONCURRENCY = 3
const CONTENT_ROOT = 'src/content/docs'
const IMG_ROOT = 'public/img'

interface Source {
	product: string
	version?: string
	kind: 'webhelp' | 'offline'
	base: string
}

interface Topic {
	/** slug path relative to the source root, no extension (e.g. "key_assign", "ma_3d/index") */
	slug: string
	title: string
	url: string
}

interface SidebarNode {
	label: string
	slug?: string
	items: SidebarNode[]
}

const ALL_SOURCES: Source[] = [
	{ product: 'grandma3', version: '2.4', kind: 'webhelp', base: 'https://help.malighting.com/grandMA3/2.4/HTML/' },
	{ product: 'grandma3', version: '2.3', kind: 'webhelp', base: 'https://help.malighting.com/grandMA3/2.3/HTML/' },
	{ product: 'grandma3', version: '2.2', kind: 'webhelp', base: 'https://help.malighting.com/grandMA3/2.2/HTML/' },
	{ product: 'grandma3', version: '2.1', kind: 'webhelp', base: 'https://help.malighting.com/grandMA3/2.1/HTML/' },
	{ product: 'grandma3', version: '2.0', kind: 'webhelp', base: 'https://help.malighting.com/grandMA3/2.0/HTML/' },
	{ product: 'grandma2', kind: 'offline', base: 'https://help.malighting.com/grandMA2/en/help/' },
	{ product: 'dot2', kind: 'offline', base: 'https://help.malighting.com/dot2/en/help/' },
	{ product: 'utility', kind: 'offline', base: 'https://help.malighting.com/utility/en/help/' },
	{ product: 'network', kind: 'offline', base: 'https://help.malighting.com/network/en/help/' },
]

/** Default run: latest MA3 + all unversioned products. Older MA3 via explicit arg. */
const DEFAULT_KEYS = ['grandma3:2.4', 'grandma2', 'dot2', 'utility', 'network']

const parseHtml = unified().use(rehypeParse)
const toMd = unified()
	.use(rehypeRemark)
	.use(remarkGfm)
	.use(remarkStringify, { bullet: '-', emphasis: '_', rule: '-' })

const stats = { fetched: 0, written: 0, unchanged: 0, failed: 0, images: 0 }
const failures: string[] = []

async function fetchText(url: string, attempt = 1): Promise<string> {
	const res = await fetch(url, { headers: { 'user-agent': USER_AGENT } })
	if (!res.ok) {
		if (attempt < 3 && (res.status === 429 || res.status >= 500)) {
			await new Promise((r) => setTimeout(r, 1500 * attempt))
			return fetchText(url, attempt + 1)
		}
		throw new Error(`${res.status} ${url}`)
	}
	stats.fetched++
	return res.text()
}

function sanitizeSlugPart(part: string): string {
	return part.toLowerCase().replace(/\.html?$/, '').replace(/[^a-z0-9_-]/g, '-')
}

function slugFromRelPath(rel: string): string {
	return rel.split('/').map(sanitizeSlugPart).filter(Boolean).join('/')
}

/** Extract the first balanced JSON array starting at `start` in `s`. */
function balancedJson(s: string, start: number): string {
	let depth = 0
	let inStr = false
	for (let i = start; i < s.length; i++) {
		const ch = s[i]
		if (inStr) {
			if (ch === '\\') i++
			else if (ch === '"') inStr = false
		} else if (ch === '"') inStr = true
		else if (ch === '[' || ch === '{') depth++
		else if (ch === ']' || ch === '}') {
			depth--
			if (depth === 0) return s.slice(start, i + 1)
		}
	}
	throw new Error('unbalanced JSON in toc data')
}

/** grandMA3 WebHelp: ToC lives in toc_nav.js as a CHTree node array. */
async function enumerateWebhelp(src: Source): Promise<{ topics: Topic[]; sidebar: SidebarNode[] }> {
	const tocUrl = new URL('../_webHelpScripts/Master/toc_nav.js', src.base).href
	const js = await fetchText(tocUrl)
	const start = js.indexOf('[{"id"')
	if (start < 0) throw new Error(`no ToC array found in ${tocUrl}`)
	const nodes = JSON.parse(balancedJson(js, start))

	const topics: Topic[] = []
	const seen = new Set<string>()
	const walk = (node: any): SidebarNode => {
		const raw: string | undefined = node?.vals?.e
		const label = String(node?.t ?? '').trim()
		let slug: string | undefined
		if (raw) {
			slug = raw === 'help' ? 'index' : slugFromRelPath(raw)
			if (!seen.has(slug)) {
				seen.add(slug)
				topics.push({ slug, title: label, url: new URL(`${raw}.html`, src.base).href })
			}
		}
		const items = (node?.c ?? []).map(walk)
		return { label, slug, items }
	}
	// Root manual page is not in the tree itself.
	topics.push({ slug: 'index', title: 'grandMA3 User Manual', url: new URL('help.html', src.base).href })
	const sidebar = nodes.map(walk)
	return { topics, sidebar }
}

/** grandMA2/dot2/etc offline exports: full jsTree markup inline in index.html. */
async function enumerateOffline(src: Source): Promise<{ topics: Topic[]; sidebar: SidebarNode[] }> {
	const html = await fetchText(new URL('index.html', src.base).href)
	const tree = parseHtml.parse(html)
	const nav = select('#offline-tree', tree) ?? select('.topic-tree', tree)
	if (!nav) throw new Error(`no #offline-tree in ${src.base}index.html`)

	const topics: Topic[] = []
	const seen = new Set<string>()
	const walkLi = (li: any): SidebarNode | undefined => {
		const a = (li.children ?? []).find((c: any) => c.tagName === 'a')
		const childLis = (li.children ?? [])
			.filter((c: any) => c.tagName === 'ul')
			.flatMap((ul: any) => (ul.children ?? []).filter((c: any) => c.tagName === 'li'))
		const label = a ? hastToString(a).trim() : ''
		const href: string | undefined = a?.properties?.href
		let slug: string | undefined
		if (href && /\.html?($|#)/.test(href) && !/^https?:/.test(href)) {
			const rel = href.split('#')[0]
			slug = slugFromRelPath(rel)
			if (slug && !seen.has(slug)) {
				seen.add(slug)
				topics.push({ slug, title: label, url: new URL(rel, src.base).href })
			}
		}
		const items = childLis.map(walkLi).filter(Boolean) as SidebarNode[]
		if (!label && !slug && items.length === 0) return undefined
		return { label, slug, items }
	}
	const rootLis = selectAll('ul > li', nav).filter((li: any) => {
		// only top-level lis: their parent ul is a direct child of nav
		return true
	})
	// Build from the outermost ul only to preserve hierarchy without duplicates.
	const outerUl = (function findUl(n: any): any {
		if (n.tagName === 'ul') return n
		for (const c of n.children ?? []) {
			const r = findUl(c)
			if (r) return r
		}
		return undefined
	})(nav)
	const sidebar = ((outerUl?.children ?? []).filter((c: any) => c.tagName === 'li').map(walkLi).filter(Boolean) ??
		[]) as SidebarNode[]
	return { topics, sidebar }
}

interface ConvertResult {
	markdown: string
	description: string
	images: Map<string, string> // remote URL -> local public path
}

function removeNodes(tree: any, test: (node: any) => boolean) {
	visit(tree, (node: any, index, parent: any) => {
		if (parent && typeof index === 'number' && test(node)) {
			parent.children.splice(index, 1)
			return [SKIP, index]
		}
	})
}

function convertPage(opts: {
	html: string
	pageUrl: string
	src: Source
	routePrefix: string
	slugSet: Set<string>
}): ConvertResult {
	const { html, pageUrl, src, routePrefix, slugSet } = opts
	const tree = parseHtml.parse(html)
	const content = select('#offline-content', tree)
	if (!content) throw new Error(`no #offline-content in ${pageUrl}`)
	const subtopics = select('#offline-subtopics', tree)

	// Strip chrome: breadcrumb/version table, heading-anchor links, styles, scripts.
	removeNodes(content, (n) => {
		if (n.tagName === 'style' || n.tagName === 'script') return true
		const cls = String((n.properties?.className ?? []).join(' '))
		if (n.tagName === 'table' && /FlatTable/.test(cls)) {
			// only the breadcrumb header table — it contains a CHBreadcrumb
			return Boolean(select('.CHBreadcrumb', n))
		}
		return /CHHeadingLink/.test(cls)
	})

	// grandocs is an unofficial mirror: drop MA Lighting brand imagery (company
	// logo + wordmark) so it is neither referenced nor downloaded.
	removeNodes(content, (n) => n.tagName === 'img' && isBrandAsset(n.properties?.src))

	const images = new Map<string, string>()
	const verDir = src.version ? src.version.replace(/\./g, '-') : ''
	visit(content, (node: any) => {
		if (node.tagName === 'img' && node.properties?.src) {
			const abs = new URL(String(node.properties.src), pageUrl).href
			const base = sanitizeSlugPart(String(abs.split('/').pop() ?? 'img').replace(/\.(png|jpe?g|gif|svg|webp)$/i, ''))
			const ext = (abs.match(/\.(png|jpe?g|gif|svg|webp)/i)?.[0] ?? '.png').toLowerCase()
			const hash = createHash('sha1').update(abs).digest('hex').slice(0, 6)
			const local = `/img/${[src.product, verDir].filter(Boolean).join('/')}/${base}-${hash}${ext}`
			images.set(abs, local)
			node.properties.src = local
			delete node.properties.srcset
		}
		if (node.tagName === 'a' && node.properties?.href) {
			const href = String(node.properties.href)
			if (/^(mailto:|javascript:|#)/.test(href)) return
			let abs: URL
			try {
				abs = new URL(href, pageUrl)
			} catch {
				return
			}
			const [path, frag] = [abs.pathname, abs.hash]
			if (abs.href.startsWith(src.base)) {
				const rel = abs.href.slice(src.base.length).split('#')[0]
				const slug = slugFromRelPath(rel)
				if (slug && slugSet.has(slug)) {
					const clean = slug === 'index' ? '' : slug.endsWith('/index') ? slug.slice(0, -6) : slug
					node.properties.href = `${routePrefix}${clean ? `${clean}/` : ''}${frag}`
					return
				}
			}
			// Anything else: keep absolute so it still works from our domain.
			node.properties.href = abs.href
		}
	})

	const mdast = toMd.runSync(content)
	let markdown = cleanMarkdown(toMd.stringify(mdast).trim())

	// Subtopic links as a clean list.
	if (subtopics) {
		const links = selectAll('a', subtopics)
			.map((a: any) => {
				const href = String(a.properties?.href ?? '')
				const label = hastToString(a).trim()
				if (!label || /^https?:/.test(href) === false && !/\.html?/.test(href)) return undefined
				const rel = href.split('#')[0]
				const slug = slugFromRelPath(rel)
				if (!slug || !slugSet.has(slug)) return undefined
				return `- [${label.replace(/[\[\]]/g, '')}](${routePrefix}${slug === 'index' ? '' : `${slug}/`})`
			})
			.filter(Boolean)
		if (links.length > 0) markdown += `\n\n## Subtopics\n\n${links.join('\n')}`
	}

	// Description: first paragraph-ish line of text, links reduced to labels.
	const descLine =
		markdown
			.split('\n')
			.map((l) => l.trim())
			.find((l) => l && !l.startsWith('#') && !l.startsWith('|') && !l.startsWith('-') && !l.startsWith('!')) ?? ''
	const description = descLine
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/&#x[0-9a-fA-F]+;/g, '')
		.replace(/[*_`\\]/g, '')
		.trim()
		.slice(0, 160)

	return { markdown, description, images }
}

async function downloadImage(remote: string, localPublicPath: string) {
	const file = join('public', localPublicPath.replace(/^\//, '').replace('img/', 'img/'))
	const target = join(IMG_ROOT, localPublicPath.replace(/^\/img\//, ''))
	if (existsSync(target)) return
	const res = await fetch(remote, { headers: { 'user-agent': USER_AGENT } })
	if (!res.ok) throw new Error(`img ${res.status} ${remote}`)
	await mkdir(dirname(target), { recursive: true })
	await writeFile(target, Buffer.from(await res.arrayBuffer()))
	stats.images++
}

async function crawlSource(src: Source) {
	const key = src.version ? `${src.product}:${src.version}` : src.product
	const verDir = src.version ? src.version.replace(/\./g, '-') : ''
	const routePrefix = `/${[src.product, verDir].filter(Boolean).join('/')}/`
	console.log(`\n━━ ${key} — enumerating from ${src.base}`)

	const { topics, sidebar } =
		src.kind === 'webhelp' ? await enumerateWebhelp(src) : await enumerateOffline(src)
	console.log(`   ${topics.length} topics`)

	const slugSet = new Set(topics.map((t) => t.slug))
	const manifestPath = join('data/manifest', `${key.replace(':', '-')}.json`)
	let oldManifest: Record<string, { hash: string }> = {}
	if (existsSync(manifestPath)) {
		oldManifest = JSON.parse(await readFile(manifestPath, 'utf-8'))
	}
	const manifest: Record<string, { hash: string; title: string; path: string }> = {}

	const isLatest = src.product !== 'grandma3' || src.version === LATEST_MA3
	const limit = pLimit(CONCURRENCY)
	const imageQueue = new Map<string, string>()

	await Promise.all(
		topics.map((topic) =>
			limit(async () => {
				try {
					const html = await fetchText(topic.url)
					const { markdown, description, images } = convertPage({
						html,
						pageUrl: topic.url,
						src,
						routePrefix,
						slugSet,
					})
					for (const [r, l] of images) imageQueue.set(r, l)
					const title = topic.title || 'Untitled'
					const hash = createHash('sha1').update(title + description + markdown).digest('hex')
					const relPath = join(src.product, verDir, `${topic.slug}.md`)
					manifest[topic.slug] = { hash, title, path: relPath }
					if (oldManifest[topic.slug]?.hash === hash && existsSync(join(CONTENT_ROOT, relPath))) {
						stats.unchanged++
						return
					}
					const fm = [
						'---',
						`title: ${JSON.stringify(title)}`,
						description ? `description: ${JSON.stringify(description)}` : undefined,
						`product: ${src.product}`,
						src.version ? `version: ${JSON.stringify(src.version)}` : undefined,
						'lang: en',
						`sourceUrl: ${JSON.stringify(topic.url)}`,
						`scrapedAt: ${JSON.stringify(new Date().toISOString())}`,
						isLatest ? undefined : 'pagefind: false',
						'---',
						'',
					]
						.filter((l) => l !== undefined)
						.join('\n')
					const out = join(CONTENT_ROOT, relPath)
					await mkdir(dirname(out), { recursive: true })
					await writeFile(out, fm + markdown + '\n')
					stats.written++
				} catch (err) {
					stats.failed++
					failures.push(`${topic.url}: ${err}`)
				}
			})
		)
	)

	// Images (deduped across pages).
	await Promise.all(
		[...imageQueue].map(([remote, local]) =>
			limit(() =>
				downloadImage(remote, local).catch((err) => {
					failures.push(String(err))
				})
			)
		)
	)

	await mkdir('data/manifest', { recursive: true })
	await writeFile(manifestPath, JSON.stringify(manifest, null, '\t'))
	await mkdir('src/data/sidebar', { recursive: true })
	await writeFile(
		join('src/data/sidebar', `${key.replace(':', '-')}.json`),
		JSON.stringify(sidebar, null, '\t')
	)
	console.log(`   done: ${stats.written} written, ${stats.unchanged} unchanged, ${stats.failed} failed`)
}

const args = process.argv.slice(2)
const keys = args.length > 0 ? args : DEFAULT_KEYS
const selected = ALL_SOURCES.filter((s) => {
	const key = s.version ? `${s.product}:${s.version}` : s.product
	return keys.includes(key) || keys.includes(s.product)
})
if (selected.length === 0) {
	console.error(`No sources match ${keys.join(', ')}`)
	process.exit(1)
}

for (const src of selected) {
	await crawlSource(src)
}

console.log(`\n━━ totals: ${JSON.stringify(stats)}`)
if (failures.length > 0) {
	await mkdir('data', { recursive: true })
	await writeFile('data/crawl-report.json', JSON.stringify(failures, null, '\t'))
	console.log(`${failures.length} failures → data/crawl-report.json`)
}
