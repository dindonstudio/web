import sanityImage from '@sanity/image-url'

export const imageBuilder = sanityImage({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_API_DATASET,
})
