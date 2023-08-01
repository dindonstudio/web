
export const localeToZendeskLocale = (locale) => ({
	en: 'en-us',
	es: 'es',
})[locale] || 'en-us'

// const username = 'support@uprofittrader.com'
// const token = process.env.ZENDESK_TOKEN
const remoteUri = 'https://uprofittrader.zendesk.com/api/v2'

export const listCategories = async (locale = 'en') => {
	// https://uprofittrader.zendesk.com/api/v2/help_center/en-us/categories.json
	const response = await fetch(`${remoteUri}/help_center/${localeToZendeskLocale(locale)}/categories.json`)
	const data = await response.json()
	return data?.categories
}

export const listSections = async (locale = 'en') => {
	// https://uprofittrader.zendesk.com/api/v2/help_center/en-us/sections.json
	const response = await fetch(`${remoteUri}/help_center/${localeToZendeskLocale(locale)}/sections.json`)
	const data = await response.json()
	return data?.sections
}

export const listArticles = async (locale = 'en') => {
	// https://uprofittrader.zendesk.com/api/v2/help_center/en-us/articles.json
	const response = await fetch(`${remoteUri}/help_center/${localeToZendeskLocale(locale)}/articles.json`)
	const data = await response.json()
	return data?.articles
}

export const getArticle = async (id, locale = 'en') => {
	// https://uprofittrader.zendesk.com/api/v2/help_center/en-us/articles/360031612091.json
	const response = await fetch(`${remoteUri}/help_center/${localeToZendeskLocale(locale)}/articles/${id}.json`)
	const data = await response.json()
	return data?.article
}

export const searchArticles = async (terms, signal, locale = 'en') => {
	// https://uprofittrader.zendesk.com/api/v2/help_center/articles/search?query=ninjatrader&filter[locales]=en-us
	const response = await fetch(`${remoteUri}/help_center/articles/search?query=${encodeURIComponent(terms)}&filter[locales]=${localeToZendeskLocale(locale)}`, {
		signal,
	})
	const data = await response.json()
	return data?.results
}

// export const listCategoryArticles = async (locale = 'en') => {
// 	// https://uprofittrader.zendesk.com/api/v2/help_center/en-us/categories/360001963552/articles.json
// }
