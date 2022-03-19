// Disable ESLint console logging rule for this file
/* eslint-disable */
import fs from 'fs-extra'
import { downloadSite } from '../src/utils/download-site.mjs'

const scrapePath = './scrape'

;(async () => {

  await fs.remove( scrapePath )

  console.log(`Pulling in URLs`)

  const pageList = await downloadSite({
    path: scrapePath,
  })

  console.log( 'pageList', pageList.length )

  console.log('Pull complete.')

  process.exit()
})()
