// Disable ESLint console logging rule for this file
/* eslint-disable */
// import fs from 'fs-extra'

// import { downloadSite } from '../src/utils/download-site.mjs'

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts'
import { exists } from "https://deno.land/std/fs/mod.ts"


const scrapePath = './scrape'


const docsUrlsPath = './public/docs-urls.json'

async function storeDocsUrls ( newUrls ) {
  // Get current docs urls
  const docsUrls = await readJSON( docsUrlsPath )

  // Merge the docsUrls with the htmlResourceUrls, remove duplicates, and sort
  const mergedUrls = Array.from(new Set([
    ...docsUrls,
    ...newUrls
  ]))
  .sort()

  // Save htmlResourceUrls to json
  await writeJSON(  docsUrlsPath, mergedUrls, null, '\t' )
}

async function ensureRemove ( path ) {
  if ( await exists( path ) ) {
    await Deno.remove( path, { recursive: true })
  }
}


;(async () => {

  const docsUrls = await readJSON( docsUrlsPath )

  await ensureRemove( scrapePath )

  console.log(`Pulling in URLs`, docsUrls)

  // const {
  //   result
  // } = await downloadSite({
  //   path: scrapePath,
  // })

  // const htmlResourceUrls = result
  //   .filter(resource => resource.type === 'html')
  //   .map(resource => resource.url)


  // // Merge the docsUrls with the htmlResourceUrls, remove duplicates, and sort
  // const mergedUrls = Array.from(new Set([
  //   ...docsUrls,
  //   ...htmlResourceUrls,
  // ]))
  // .sort()

  // Save htmlResourceUrls to json
  await storeDocsUrls( [ 'test' ] )

  // console.log( 'htmlResourceUrls', htmlResourceUrls )
  // console.log( 'result type', result[0].type )

  // console.log( 'result', result.length )

  console.log('Pull complete.')

  Deno.exit()
})()
