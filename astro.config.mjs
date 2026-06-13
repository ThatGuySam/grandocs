// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightSidebarTopics from 'starlight-sidebar-topics'

import { productSidebar } from './src/lib/build-sidebar.mjs'

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
			plugins: [
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
