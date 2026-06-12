import { defineCollection, z } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Product family the page belongs to. */
				product: z
					.enum(['grandma3', 'grandma2', 'dot2', 'utility', 'network', 'legacy'])
					.optional(),
				/** Upstream software version, e.g. "2.4". Absent for unversioned manuals. */
				version: z.string().optional(),
				/** Content language code, e.g. "en". */
				lang: z.string().default('en'),
				/** Canonical page on help.malighting.com this was converted from. */
				sourceUrl: z.string().url().optional(),
				/** ISO timestamp of the crawl that produced this file. */
				scrapedAt: z.string().optional(),
			}),
		}),
	}),
}
