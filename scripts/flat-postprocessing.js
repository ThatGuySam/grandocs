// Disable ESLint console logging rule for this file
/* eslint-disable */
import { downloadSite } from '../src/utils/download-site.js'

;(async () => {
  console.log(`Pulling in URLs`)

  const pageList = await downloadSite()

  console.log('pageList', pageList)

  console.log('Pull complete.')

  process.exit()
})()
