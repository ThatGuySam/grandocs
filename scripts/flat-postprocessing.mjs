// Disable ESLint console logging rule for this file
/* eslint-disable */
import fs from 'fs-extra'

import { downloadSite } from '../src/utils/download-site.mjs'

const scrapePath = './scrape'

;(async () => {

  const docsUrls = await fs.readJson('./public/docs-urls.json')

  await fs.remove( scrapePath )

  console.log(`Pulling in URLs`, docsUrls)

  const {
    result
  } = await downloadSite({
    path: scrapePath,
  })

  const htmlResourceUrls = result
    .filter(resource => resource.type === 'html')
    .map(resource => resource.url)


  // Merge the docsUrls with the htmlResourceUrls, remove duplicates, and sort
  const mergedUrls = Array.from(new Set([
    ...docsUrls,
    ...htmlResourceUrls,
  ]))
  .sort()

  // Save htmlResourceUrls to json
  await fs.writeJSON( `./public/docs-urls.json`, mergedUrls, { spaces: '\t' } )

  console.log( 'htmlResourceUrls', htmlResourceUrls )
  // console.log( 'result type', result[0].type )

  console.log( 'result', result.length )

  console.log('Pull complete.')

  process.exit()
})()
