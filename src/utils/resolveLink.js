
export const resolveInternalLink = (link) => {
	const {_type, slug = '', label, reference} = link

	let href = ''
	switch (_type) {
		case 'homePage' :
			href = `/`
			break
		default:
			href = `/${slug}`
			break
	}

	// Fix for internal links not working in Footer
	if (!slug && reference._ref.includes('page.')) {
		href = `/${reference._ref.split('.').pop()}`
	}

	return {href, label}
}

export const resolveExternalLink = (link) => {
	return {href: link.url, label: link.label}
}

export const getLinkLabel = (link) => {
	if (!link) return undefined

	if (link._type?.startsWith('link')) {
		if (link.type?.startsWith('external') && link.external) return link.external.label
		if ((link.type?.startsWith('internal') || link.internal?.slug) && link.internal) return link.internal.label
	}

	return link?.label
}

export const resolveLink = (link) => {
	if (!link) return undefined

	if (link._type?.startsWith('link')) {
		if (link.url) return resolveExternalLink(link)
		if (link.slug || !link.url) return resolveInternalLink(link)
	}
	if (link._type?.startsWith('external')) return resolveExternalLink(link)
	if (link._type?.startsWith('internal') || link.slug) return resolveInternalLink(link)

	return link
}

export const resolveUrlOrFile = (link, defaultLabel = null) => {
	if (!link?.type) return
	if (link.type === 'file' && link.fileURL) {
		return {
			href: link.fileURL,
			label: link.label || defaultLabel,
		}
	}
	if (link.type === 'url' && link.url) {
		return {
			href: link.url,
			label: link.label || defaultLabel,
		}
	}
	return undefined
}
