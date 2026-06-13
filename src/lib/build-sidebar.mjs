/**
 * Convert the crawler's `src/data/sidebar/<key>.json` trees into Starlight
 * sidebar item arrays for use with starlight-sidebar-topics.
 *
 * Each node is `{ label, slug, items }`. We only emit links for slugs that
 * have an actual content file, so the sidebar never points at a page the
 * crawl failed to produce.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

function existingSlugs(contentBase) {
	const slugs = new Set()
	const walk = (dir, rel) => {
		for (const e of readdirSync(dir, { withFileTypes: true })) {
			if (e.isDirectory()) walk(join(dir, e.name), rel ? `${rel}/${e.name}` : e.name)
			else if (e.name.endsWith('.md')) {
				const base = e.name.slice(0, -3)
				slugs.add(rel ? `${rel}/${base}` : base)
			}
		}
	}
	if (existsSync(contentBase)) walk(contentBase, '')
	return slugs
}

/**
 * @param {object} opts
 * @param {string} opts.key       sidebar JSON key, e.g. "grandma3-2.4"
 * @param {string} opts.product   route + content folder, e.g. "grandma3"
 * @param {string} [opts.verDir]  version path segment, e.g. "2-4"
 */
export function productSidebar({ key, product, verDir }) {
	const sidebarPath = join('src/data/sidebar', `${key}.json`)
	if (!existsSync(sidebarPath)) return []
	const tree = JSON.parse(readFileSync(sidebarPath, 'utf-8'))

	const segments = [product, verDir].filter(Boolean)
	const contentBase = join('src/content/docs', ...segments)
	const routePrefix = `/${segments.join('/')}/`
	const existing = existingSlugs(contentBase)

	const linkFor = (slug) => (slug === 'index' ? routePrefix : `${routePrefix}${slug}/`)
	const hasPage = (slug) => existing.has(slug)

	const convert = (node) => {
		const children = (node.items ?? []).map(convert).filter(Boolean)
		const page = node.slug && hasPage(node.slug)
		if (children.length === 0) {
			return page ? { label: node.label, link: linkFor(node.slug) } : null
		}
		const items = page ? [{ label: 'Overview', link: linkFor(node.slug) }, ...children] : children
		return { label: node.label, collapsed: true, items }
	}

	return tree.map(convert).filter(Boolean)
}
