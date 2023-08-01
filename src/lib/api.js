import {defaultLocale} from '@config/languages'
import {client} from './sanity'

export const getClient = (preview = true) => (client)

// excluding draft is required if using an api key on non preview client
export const excludeDraft = (preview = false) => !preview ? '&& !(_id in path(\'drafts.**\'))' : ''
export const orderDraft = (preview = false) => preview ? '|order(_updatedAt desc)' : ''

// -----------------------------------------------------o utils

// content = patchTree(content, (node, uid) => { // every objects passed as a node
//		return false // -> will be set to null
//		return null // (or undefined or no return) -> keeps going, unchanged
//		return {foo: 'bar'} // -> node will be replaced
// })
const patchTree = (node, contentReplacor, nodeKey) => {
	if (Array.isArray(node)) {
		return node.map((n, i) => patchTree(n, contentReplacor, `${nodeKey}[${i}]`)).filter(item => !!item)
	} else if (node && typeof node === 'object') {
		const patched = contentReplacor(node, contentReplacor, nodeKey)
		if (patched === false) return undefined
		return (
			patched ||
		Object.keys(node).reduce((result, key) => {
			result[key] = patchTree(node[key], contentReplacor, key)
			return result
		}, {})
		)
	}
	return node
}

// -----------------------------------------------------o locales

// const locale = {current: 'en'}
// const locales = {current: ['en']}
// const defaultLocale = {current: 'en'}
// export const setLocale = (value, defaultValue, list) => {
// 	if (value) locale.current = value
// 	if (defaultValue) defaultLocale.current = defaultValue
// 	if (list) locales.current = list
// }

/**
 * Localize content
 * Fallbacks on default locale if content isn't translated
 * @param {*} value
 */

const localize = (value, into) => {
	const result = patchTree(value, (value, cr, nodeKey) => {
		if (nodeKey === 'allSlugs') return value

		if (/^locale[A-Z]/.test(value._type)) {
			return value[into] || value[defaultLocale] || false
		}
	})
	return result
}

// -----------------------------------------------------o fields

export const slugField = (locale, path = '') => /* groq */`'slug': coalesce(${path}slug.${locale}.current, ${path}slug.${defaultLocale}.current)`

// const assetWithAltField = /* groq */`
// asset{
// 	_ref,
// 	_type,
// 	'altText': @->altText,
// }`

// const fileURLField = (field = 'urlOrFileWithLabel') => /* groq */`
// ${field} {
// 	...,
// 	'fileURL': file.asset->url
// }`

const internalLinkRefFields = (locale) => /* groq */`
${slugField(locale, '@.reference->')},
'label': coalesce(label.${locale}, label),
'docType': @.reference->_type
`

export const linkResolver = (locale, field = 'cta') => /* groq */`${field} {
	...,
	_type == 'internalLink' || _type == 'internalLinkWithLabel' || selectedTab == 'internalLink' => {
		${internalLinkRefFields(locale)},
	},
}`

// -----------------------------------------------------o settings

export async function getSettings (locale, preview) {
	const results = await getClient(true).fetch(/* groq */`{
		'settings': *[_id in path("settings.*") ${excludeDraft(preview)}] {
			...,
			_type == 'header' => {
				${linkResolver(locale, 'links[]')},
				${linkResolver(locale, 'secondayLinks[]')},
			},
			_type == 'footer' => {
				${linkResolver(locale, 'links[]')},
				${linkResolver(locale, 'secondayLinks[]')},
			},
		},
		'locales': *[_type == 'locale' ${excludeDraft(preview)}]{key, value},
	}`)

	return localize(results, locale)
}

// -----------------------------------------------------o documents

export async function getDocumentById (id, preview) {
	const results = await getClient(preview)
		.fetch(/* groq */`*[_id == '${id}'${preview ? ` || _id == 'drafts.${id}'` : ''}]${orderDraft(preview)}[0]{
			_type,
			${slugField}
		}`)
	return results
}

// export async function getDocumentDraft (id) {
// 	const results = await getClient(true)
// 		.fetch(`*[_id == '${id}' || _id == 'drafts.${id}']${orderDraft(true)}{_type, ${slugField}}`)
// 	return results
// }

export async function getDocumentPaths (locales, types) {
	const _types = Array.isArray(types) ? types : [types]
	const results = await getClient()
		.fetch(/* groq */`*[_type in [${_types.map(t => `'${t}'`).join(',')}] && defined(slug) ${excludeDraft()}]{
			slug
		}`)
	return results
}

// -----------------------------------------------------o pages

// const accordionSelectors = (locale) => /* groq */`
// items[] {
// 	...,
// 	${blockContentSelectors(locale, 'blocks')},
// }`

const blockContentSelectors = (locale, field = 'blockContent') => /* groq */`
'${field}': ${field}.${locale}[] {
	...,
	_type == 'block' => {
		...,
		markDefs[] {
			...,
			_type == 'link' => {
				${linkResolver(locale, 'href')}
			}
		}
	}
}`

export const largeTitleCta = (locale, field = 'largeTitleCta') => /* groq */ `
${field} {
	...,
	${linkResolver(locale, 'cta')}
}`

const pageFields = (locale) => /* groq */ `
...,
${slugField(locale)},
${linkResolver(locale, 'demoLink')},
${linkResolver(locale, 'learnMoreLink')},
`

export async function getPageById (id, locale, preview, fields = null) {
	const result = await getClient(preview)
		.fetch(/* groq */`*[_id == '${id}'${preview ? ` || _id == 'drafts.${id}'` : ''}]${orderDraft(preview)}[0]{
			${fields || pageFields(locale)}
		}`)
	return localize(result, locale)
}

export async function getPostsByType (type, locale, preview, fields = '') {
	console.log('api.js', fields)
	const result = await getClient(preview)
		.fetch(/* groq */`*[_type == '${type}' ${excludeDraft()}]|order(title asc){
			...,
			${fields}
		}`)
	return localize(result, locale)
}

export async function getBySlug (slug, locale, types = undefined, fields = '...', preview = false) {
	const _types = types && (Array.isArray(types) ? types : [types])
	const results = await getClient(preview)
		.fetch(/* groq */`*[${_types?.length ? `_type in [${_types.map(t => `'${t}'`).join(',')}]` + ' &&' : ''}(slug.current == '${slug}') ${excludeDraft(preview)}][0]{
			${fields}
		}`)
	return localize(results)
}

export async function getPageBySlug (slug, locale, preview) {
	return getBySlug(slug, locale, ['legalPage'], /* groq */`
_type == 'legalPage' => {
	...,
	content {
		...,
		${blockContentSelectors(locale, 'text')},
	},
	'menu': *[_id == 'legalsMenu' ${excludeDraft()}][0] {
		...,
		${linkResolver(locale, 'links[]')},
	},
},
	`, preview)
}

export async function get404 (locale, preview) {
	const results = await getClient(preview)
		.fetch(/* groq */`*[_id == 'error-page-404' ${excludeDraft()}][0]{
			...,
		}`)
	return localize(results, locale)
}

// -----------------------------------------------------o slices

export async function getSharedSlice (id, locale, preview) {
	const result = await getClient(true).fetch(/* groq */`{
		'${id}': *[_id == "shared.${id}" ${excludeDraft(preview)}][0] {
			...,
			${linkResolver(locale, 'link')},
		},
	}`)
	return localize(result, locale)
}
