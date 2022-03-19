import axios from 'axios'
import { env } from 'process'



export async function fetchUrlsFromGoogle () {

  const urls = []

  // Our current results page starting point
  let start = 1
  let hasRemainingResults = true

  try {
    // Loop through all the pages of results
    while ( hasRemainingResults ) {

      // const requestUrl = 'https://customsearch.googleapis.com/customsearch/v1?cx=751230d6295322c25&q=e&key=ZZZZZZZZZZ'
      const requestUrl = 'https://customsearch.googleapis.com/customsearch/v1'

      const requestOptions = {
        method: 'get',
        url: requestUrl,
        headers: {
          'Referer': 'Grandocs'
        },
        params: {
          q: 'e',
          // https://cse.google.com/cse/statistics/stats?cx=751230d6295322c25
          cx: '751230d6295322c25',
          start: start,

          key: process.env.GOOGLE_KEY
        }
      }

      const results = await axios( requestOptions )
        .then( response => response.data )

      // Store the result item urls
      const resultUrls = results.items.map( item => item.link )

      // Add the result urls to the list of urls
      urls.push( ...resultUrls )

      // Check that next page exists
      hasRemainingResults = results?.queries?.nextPage !== null

      start += 10
    }
  } catch (error) {
    console.log('Error fetching URLs from Google: ', error)
  }


  return urls
}