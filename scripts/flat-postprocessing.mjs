// Disable ESLint console logging rule for this file
/* eslint-disable */

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// https://droces.github.io/Deno-Cheat-Sheet/
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts'
import { exists } from "https://deno.land/std/fs/mod.ts"
import 'https://deno.land/std/dotenv/load.ts'

import { fetchUrlsFromGoogle } from '../src/utils/fetch-urls-from-google.mjs'
import { downloadSite } from '../src/utils/download-site.mjs'

const scrapePath = './src/pages'


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

	if ( !Deno.env.get('DISABE_GOOGLE_FETCH') ) {
		const googleUrls = await fetchUrlsFromGoogle()

  	await storeDocsUrls( googleUrls )
	} else {
		console.log('Skipping Google fetch')
	}

  const docsUrls = await readJSON( docsUrlsPath )

  console.log(`Pulling in ${ docsUrls.length } URLs`)

  const {
    savedFiles
  } = await downloadSite({
    path: scrapePath,
		urls: docsUrls,
  })

  console.log('Pull complete.')

  Deno.exit()
})()
