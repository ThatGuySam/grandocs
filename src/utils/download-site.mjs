import {
  ensureDir,
} from 'https://deno.land/std@0.130.0/fs/mod.ts'
import { join as joinPath } from 'https://deno.land/std@0.130.0/path/mod.ts'

import axios from 'https://deno.land/x/axiod/mod.ts'
import { initParser, DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm-noinit.ts'
import matter from 'https://jspm.dev/gray-matter'

export const targetEntryUrl = 'https://help2.malighting.com/Page/grandMA2/grandma2/en/3.9'

export const targetHost = (new URL( targetEntryUrl )).host

await initParser()


class ScrapedPage {
	constructor ( options ) {
		this.options = options
	}

	get doc () {
		if ( typeof this.docInstance === 'undefined' ) {
			this.docInstance = new DOMParser().parseFromString( this.options.html, 'text/html' )
		}

		return this.docInstance
	}

	get parsedUrl () {
		return new URL( this.options.url )
	}

	get url () {
		return this.options.url
	}

	get directoryPath () {
		const localPath = this.parsedUrl.pathname.replace('/Page/', '')
		return joinPath( this.options.basePath, localPath )
	}

	get filePath () {
		return joinPath( this.directoryPath, 'index.md' )
	}

	get topicContent () {
		if ( typeof this.topicContentNode === 'undefined' ) {
			this.topicContentNode = this.doc.querySelector('.topic-content')
		}

		return this.topicContentNode
	}

	get grayMatter () {
		return {
			originalUrl: this.url
		}
	}

	async saveAsMarkdown () {
		await ensureDir( this.directoryPath )

		const content = matter.stringify( this.topicContent.innerHTML, this.grayMatter )

		await Deno.writeTextFile( this.filePath, content )

		return {
			filePath: this.filePath,
			grayMatter: this.grayMatter,
			content: this.topicContent.textContent
		}
	}


}

// Resource methods: https://github.com/website-scraper/node-website-scraper/blob/b82d5e8309a5220e206a4aac0bb87f390e85938e/lib/resource.js
class MaScraper {
  constructor( options ) {
		this.options = options
  }

  // get requestCount() {}

  stats = {
    startedRequests: 0,
    finishedRequests: 0,
    resourceErrors: 0,
		skippedUrls: []
  }

  apply(registerAction) {
    registerAction('beforeRequest', async (options) => {
      this.stats.startedRequests += 1

      const { resource, requestOptions } = options

      console.log(`Starting new request`, resource.url) // eslint-disable-line no-console

      return { requestOptions }
    })

    registerAction('afterResponse', async ({ response }) => {
      this.stats.finishedRequests += 1

      return response.body
    })

    // registerAction('saveResource', async ({resource}) => {
    // })

    // registerAction('generateFilename', async ({resource}) => {
    // })

    registerAction('onResourceError', ({ resource, error }) => {
      this.stats.resourceErrors += 1

      console.log(`Error on ${resource.url}`, error) // eslint-disable-line no-console
    })

    // registerAction('beforeStart', async ({options}) => {});
    // registerAction('afterFinish', async () => {});
    // registerAction('error', async ({error}) => {console.error(error)});
    // registerAction('beforeRequest', ({resource, requestOptions}) => {})
    // registerAction('afterResponse', async ({response}) => response.body);
    // registerAction('onResourceSaved', ({resource}) => {});
    // registerAction('onResourceError', ({resource, error}) => {})
    // registerAction('saveResource', async ({resource}) => {});
    // registerAction('generateFilename', async ({resource}) => {})
    // registerAction('getReference', async ({resource, parentResource, originalReference}) => {})
  }

	async scrape () {
		for (const url of this.options.urls) {

			// Fetch the page
			const pageHtmlMarkup = await axios.get(url)
				.then(res => res.data)
				.catch(err => {
					console.error('Error fetching page', err)
					return null
				})

			const page = new ScrapedPage({
				url,
				html: pageHtmlMarkup,
				basePath: this.options.path
			})

			if ( page.topicContent === null ) {

				this.stats.skippedUrls.push( url )

				console.log(`Skipping ${url}`) // eslint-disable-line no-console

				continue
			}

			// Save contents as Markdown
			const md = page.topicContent.innerHTML

			console.log( 'Saving path', page.filePath )
			console.log( 'url', url )

			const savedFile = await page.saveAsMarkdown()

			console.log( 'Saved' )
		}
	}
}

export async function downloadSite( options ) {
  const {
    path,
		urls
  } = options

  const maScraper = new MaScraper( options )

  // const scrapeOptions = {
  //   ...defaultOptions,
  //   prettifyUrls: true,
  //   urls: [
  //     targetEntryUrl,
	// 		...urls
  //   ],
  //   // URLs to filter out
  //   urlFilter(url) {
  //     return !url.includes(targetHost)
  //   },
  //   directory: path,

  //   // recursive: true,
  //   // maxRecursiveDepth: 2,

  //   // bySiteStructure: https://github.com/website-scraper/node-website-scraper/blob/4.x/README.md#bysitestructure
  //   // Method: https://github.com/website-scraper/node-website-scraper/blob/b82d5e8309a5220e206a4aac0bb87f390e85938e/lib/plugins/generate-filenamy-by-site-structure-plugin.js
  //   // filenameGenerator: 'bySiteStructure',

  //   plugins: [ maScraper ],
  // }

  const savedFiles = await maScraper.scrape()

  return {
    savedFiles
  }
}
