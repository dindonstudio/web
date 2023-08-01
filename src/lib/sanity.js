const sanityClient = require('@sanity/client')

const options = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.STORYBOOK_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_API_DATASET || process.env.STORYBOOK_SANITY_API_DATASET,
	useCdn: false,
	apiVersion: '2021-10-04',
	token: process.env.SANITY_API_TOKEN,
}

module.exports.client = sanityClient(options)
module.exports.cdnClient = sanityClient({...options, token: null, useCdn: true})
module.exports.FETCH_URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.apicdn.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_API_DATASET}?query=`
