/**
 * One-time cleanup: remove MA Lighting brand imagery from already-converted
 * content. Strips brand-logo markdown image tokens from every page and deletes
 * the downloaded brand-asset files. The crawler (scripts/crawl.ts) applies the
 * same rule going forward, so re-syncs won't re-introduce them.
 */
import { readdir, readFile, writeFile, rm, stat } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BRAND_ASSET_RE, isBrandAsset } from './lib/branding.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DOCS = join(ROOT, 'src', 'content', 'docs')
const IMG = join(ROOT, 'public', 'img')

async function* walk(dir, exts) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, e.name)
		if (e.isDirectory()) yield* walk(p, exts)
		else if (exts.some((x) => e.name.endsWith(x))) yield p
	}
}

// Markdown image whose URL is a brand asset: ![alt](…ma_logo…).
const brandImg = /!\[[^\]]*\]\(([^)]*)\)/g

let filesChanged = 0
let refsRemoved = 0
for await (const file of walk(DOCS, ['.md', '.mdx'])) {
	const src = await readFile(file, 'utf-8')
	let removed = 0
	let out = src.replace(brandImg, (match, url) => {
		if (isBrandAsset(url)) {
			removed++
			return ''
		}
		return match
	})
	if (removed === 0) continue
	// Tidy up: trailing spaces left on a line, and runs of >2 blank lines.
	out = out
		.replace(/[ \t]+$/gm, '')
		.replace(/\n{3,}/g, '\n\n')
	await writeFile(file, out)
	filesChanged++
	refsRemoved += removed
}

let filesDeleted = 0
try {
	await stat(IMG)
	for await (const img of walk(IMG, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'])) {
		if (isBrandAsset(img)) {
			await rm(img)
			filesDeleted++
		}
	}
} catch {
	/* no img dir */
}

console.log(
	`[strip-branding] removed ${refsRemoved} brand image refs from ${filesChanged} pages; ` +
		`deleted ${filesDeleted} brand asset files. Pattern: ${BRAND_ASSET_RE}`,
)
