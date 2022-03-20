// import { useRouter } from 'next/router'
// import md from 'markdown-it'

import { Meta } from '@/layout/Meta.tsx'
import { Main } from '@/templates/Main.tsx'

export async function getStaticPaths() {
	const { default: glob } = await import('fast-glob')

	const markdownFiles = await glob(`./src/docs/**/index.md`)

	const paths = markdownFiles.map((fileName) => ({
		params: {
			slug: [
				...fileName
					.replace('index.md', '')
					.replace('./src/docs/', '')
					.split('/'),
			],
		},
	}))

	// console.log( 'paths', paths.map( path => path.params ) )

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const fs = await import('fs')
	const { default: matter } = await import('gray-matter')

	const fileName = fs.readFileSync(
		`src/docs/${params.slug.join('/')}/index.md`,
		'utf-8'
	)
	const { data: frontmatter, content } = matter(fileName)

	return {
		props: {
			// slug: ['test'],
			frontmatter,
			content,
		},
	}
}

export default function DocsPage({ frontmatter, content }) {
	// const router = useRouter()
	// const slug = router.query.slug || []

	return (
		<Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
			<div className="prose mx-auto">
				<h1>{frontmatter.originalUrl}</h1>
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</Main>
	)
}
