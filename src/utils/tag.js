// @ts-nocheck

export const trackPage = () => {
	if (window.analytics) {
		window.analytics.page()
	}
}

export const trackEvent = ({action, label, path}) => {
	if (window.analytics) {
		window.analytics.track('Global tracking event', {
			name: `${action} ${label}`,
			pathname: path,
		})
	}
}
