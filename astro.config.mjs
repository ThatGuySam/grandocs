// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

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
			sidebar: [
				{
					label: 'Project',
					items: [{ label: 'About grandocs', slug: 'about' }],
				},
			],
			lastUpdated: false,
			credits: false,
		}),
	],
})
