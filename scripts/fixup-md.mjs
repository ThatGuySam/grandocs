import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cleanMarkdown } from './lib/clean-md.mjs'

async function* walk(dir) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		const p = join(dir, e.name)
		if (e.isDirectory()) yield* walk(p)
		else if (e.name.endsWith('.md')) yield p
	}
}

let changed = 0
for await (const f of walk('src/content/docs')) {
	const src = await readFile(f, 'utf-8')
	const out = cleanMarkdown(src)
	if (out !== src) { await writeFile(f, out); changed++ }
}
console.log(`fixed ${changed} files`)
