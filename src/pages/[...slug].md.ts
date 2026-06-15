import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

/**
 * Markdown twin endpoint (Stripe parity).
 *
 * Appending ".md" to any docs page URL returns its raw markdown, e.g.
 *   /grandma3/2-4/cue_store/  ->  /grandma3/2-4/cue_store.md
 *
 * This file only emits "<id>.md" URLs, so it never collides with Starlight's
 * "<id>/" HTML routes. Output is fully prerendered at build time.
 */
export const prerender = true

type DocEntry = CollectionEntry<'docs'>

export const getStaticPaths: GetStaticPaths = async () => {
	const docs = await getCollection('docs')

	return docs
		.map((entry) => ({
			// entry.id is the slug-like path, e.g. "grandma3/2-4/cue_store". Drop a
			// trailing "/index" so a product root (grandma2/index) maps to "grandma2",
			// matching the .md URL the page buttons and MCP get_page request.
			slug: entry.id.replace(/\/?index$/, ''),
			entry,
		}))
		// Skip the splash homepage (empty slug) — it has no useful markdown twin.
		.filter(({ slug }) => slug.length > 0)
		.map(({ slug, entry }) => ({
			params: { slug },
			props: { entry },
		}))
}

/** Build the small generated header prepended to every markdown twin. */
function buildHeader(entry: DocEntry): string {
	const title = entry.data.title ?? entry.id
	const lines: string[] = [`# ${title}`, '']

	if (entry.data.sourceUrl) {
		lines.push(`Source: ${entry.data.sourceUrl}`)
	}

	lines.push(
		'This is grandocs, an unofficial mirror of MA Lighting documentation. ' +
			'For authoritative or safety-relevant information, cite the canonical ' +
			'page on help.malighting.com.',
		'',
		'---',
		'',
	)

	return lines.join('\n')
}

export const GET: APIRoute = async ({ props }) => {
	const entry = props.entry as DocEntry

	const header = buildHeader(entry)
	// entry.body holds the raw markdown source. Some entries (e.g. the splash
	// index built entirely from frontmatter) may have an empty/undefined body —
	// fall back to just the generated header in that case.
	const body = entry.body ?? ''
	const markdown = header + body

	return new Response(markdown, {
		status: 200,
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	})
}
