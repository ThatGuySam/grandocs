// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLlmsTxt from 'starlight-llms-txt'

import { productSidebar } from './src/lib/build-sidebar.mjs'

// Stripe-style instructions preamble emitted at the top of /llms.txt.
const LLMS_DETAILS = `> grandocs is an UNOFFICIAL, fan-maintained mirror of MA Lighting's product
> documentation (grandMA3, grandMA2, dot2, utilities, network), rebuilt as clean
> markdown for humans and AI agents.

## How to use these docs as an agent

- Append \`.md\` to any page URL for its raw markdown (e.g.
  \`/grandma3/2-4/cue_store.md\`).
- A Model Context Protocol server is available at
  \`https://grandocs-mcp.samcarlton.workers.dev/mcp\` with tools \`search_docs\`,
  \`get_page\`, \`command_lookup\`, and \`list_products_versions\`.
- Default to grandMA3 v2.4, but the user's actual console software version always
  wins — switch the version segment in the URL accordingly.
- Never invent grandMA command syntax. Quote the page's syntax block verbatim.
- This is an unofficial mirror: for authoritative or safety-relevant information
  (conformity, electrical, safety) cite the canonical page on help.malighting.com,
  linked on every topic.`

export default defineConfig({
	site: 'https://grandocs.samcarlton.com',
	integrations: [
		starlight({
			title: 'grandocs',
			description:
				'Unofficial, agent-native mirror of MA Lighting documentation — grandMA3, grandMA2, dot2 — in clean markdown.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ThatGuySam/grandocs',
				},
			],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: false,
			credits: false,
			components: {
				// Adds Copy-as-Markdown + Open-in-LLM + Official-source actions under each title.
				PageTitle: './src/components/PageTitle.astro',
			},
			plugins: [
				starlightLlmsTxt({
					projectName: 'grandocs',
					description:
						'Unofficial, agent-native mirror of MA Lighting documentation (grandMA3, grandMA2, dot2).',
					details: LLMS_DETAILS,
					customSets: [
						{ label: 'grandMA3 (v2.4)', paths: ['grandma3/**'], description: 'Current-generation grandMA3 manual.' },
						{ label: 'grandMA2', paths: ['grandma2/**'], description: 'grandMA2 user manual.' },
						{ label: 'dot2', paths: ['dot2/**'], description: 'dot2 user manual.' },
						{ label: 'Utilities & Network', paths: ['utility/**', 'network/**'], description: 'MA fixture builder, plugins, network switch.' },
					],
					optionalLinks: [
						{ label: 'Official MA Lighting help', url: 'https://help.malighting.com/', description: 'Authoritative source.' },
						{ label: 'grandocs on GitHub', url: 'https://github.com/ThatGuySam/grandocs' },
					],
				}),
				starlightSidebarTopics(
					[
					{
						label: 'grandMA3',
						link: '/grandma3/2-4/',
						icon: 'rocket',
						items: productSidebar({ key: 'grandma3-2.4', product: 'grandma3', verDir: '2-4' }),
					},
					{
						label: 'grandMA2',
						link: '/grandma2/',
						icon: 'setting',
						items: productSidebar({ key: 'grandma2', product: 'grandma2' }),
					},
					{
						label: 'dot2',
						link: '/dot2/',
						icon: 'heart',
						items: productSidebar({ key: 'dot2', product: 'dot2' }),
					},
					{
						label: 'Utilities',
						link: '/utility/',
						icon: 'puzzle',
						items: productSidebar({ key: 'utility', product: 'utility' }),
					},
					{
						label: 'Network',
						link: '/network/',
						icon: 'random',
						items: productSidebar({ key: 'network', product: 'network' }),
					},
					{
						label: 'Project',
						link: '/about/',
						icon: 'information',
						items: [
							{ label: 'About grandocs', link: '/about/' },
							{ label: 'Building with AI', link: '/building-with-ai/' },
						],
					},
					],
					{ exclude: ['/'] }
				),
			],
		}),
	],
})
