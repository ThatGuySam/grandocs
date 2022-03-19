import scrape from 'website-scraper'
import defaultOptions from 'website-scraper/defaultOptions'

export const targetHost = 'https://help2.malighting.com/'

// Resource methods: https://github.com/website-scraper/node-website-scraper/blob/b82d5e8309a5220e206a4aac0bb87f390e85938e/lib/resource.js
class MaScraper {
  // constructor() {
  //   // this.requestCount = 0
  // }

  // get requestCount() {}

  stats = {
    startedRequests: 0,
    finishedRequests: 0,
    resourceErrors: 0,
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
}

export async function downloadSite() {
  const maScraper = new MaScraper()

  const options = {
    ...defaultOptions,
    prettifyUrls: true,
    urls: [targetHost],
    // URLs to filter out
    urlFilter(url) {
      return !url.startsWith(targetHost)
    },
    directory: './scrape',

    recursive: true,
    maxRecursiveDepth: 10,

    // bySiteStructure: https://github.com/website-scraper/node-website-scraper/blob/4.x/README.md#bysitestructure
    // Method: https://github.com/website-scraper/node-website-scraper/blob/b82d5e8309a5220e206a4aac0bb87f390e85938e/lib/plugins/generate-filenamy-by-site-structure-plugin.js
    // filenameGenerator: 'bySiteStructure',

    plugins: [maScraper],
  }

  const result = await scrape(options)

  return result
}
