/**
 * build-version-manifest.mjs
 *
 * Scans the versioned grandMA3 content tree and emits src/data/grandma3-versions.json,
 * consumed by the page-header version switcher (src/components/PageTitle.astro).
 *
 *   {
 *     "latest": "2-4",
 *     "versions": [ { "dir": "2-4", "label": "2.4" }, { "dir": "2-3", "label": "2.3" } ],
 *     "slugs": { "2-4": ["cue_store", ...], "2-3": [...] }   // topic slug per version
 *   }
 *
 * The switcher uses `slugs` to decide whether the same topic exists in the target
 * version (navigate to it) or not (fall back to that version's root).
 *
 * Run before `astro build` (it writes a source file the component imports).
 */
import { readdir, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const MA3_DIR = join(ROOT, 'src', 'content', 'docs', 'grandma3')
const OUT = join(ROOT, 'src', 'data', 'grandma3-versions.json')

/** verDir "2-4" -> label "2.4" */
const label = (dir) => dir.replace(/-/g, '.')

/** Recursively collect slug paths (relative to the version dir, no extension). */
async function collectSlugs(dir, base = '') {
	const out = []
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const rel = base ? `${base}/${e.name}` : e.name
		if (e.isDirectory()) {
			out.push(...(await collectSlugs(join(dir, e.name), rel)))
		} else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) {
			out.push(rel.replace(/\.mdx?$/, '').replace(/\/?index$/, ''))
		}
	}
	return out
}

async function main() {
	if (!existsSync(MA3_DIR)) {
		console.error('[versions] grandma3 content dir not found; skipping')
		return
	}
	const verDirs = (await readdir(MA3_DIR, { withFileTypes: true }))
		.filter((e) => e.isDirectory() && /^\d+-\d+$/.test(e.name))
		.map((e) => e.name)
		// Newest first: compare numerically on the dotted label.
		.sort((a, b) => parseFloat(label(b)) - parseFloat(label(a)))

	const slugs = {}
	for (const dir of verDirs) {
		slugs[dir] = (await collectSlugs(join(MA3_DIR, dir))).filter(Boolean).sort()
	}

	const manifest = {
		latest: verDirs[0] ?? null,
		versions: verDirs.map((dir) => ({ dir, label: label(dir) })),
		slugs,
	}

	await mkdir(join(ROOT, 'src', 'data'), { recursive: true })
	await writeFile(OUT, JSON.stringify(manifest))
	console.log(
		`[versions] ${verDirs.length} grandMA3 version(s): ${verDirs.map(label).join(', ')} ` +
			`(latest ${label(manifest.latest)})`,
	)
}

main().catch((err) => {
	console.error('[versions] fatal:', err)
	process.exitCode = 1
})
