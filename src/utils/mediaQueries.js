const desktopWidth = 844
const tabletWidth = 744

export const MOBILE = 'mobile'
export const TABLET = 'tablet'
export const DESKTOP = 'desktop'

export const minDevicesWidth = {
	mobile: 0,
	tablet: tabletWidth,
	desktop: desktopWidth,
}

export const isMobile = () => window.matchMedia(`(max-width: ${tabletWidth - 1}px)`).matches
export const isTablet = () => window.matchMedia(`(min-width: ${tabletWidth}px) and (max-width: ${desktopWidth - 1}px)`).matches
export const isDesktop = () => window.matchMedia(`(min-width: ${desktopWidth}px)`).matches

export const getCurrentDevice = (width = null) => {
	if (width !== null) {
		for (const key in minDevicesWidth) {
			if (minDevicesWidth[key] <= width) return key
		}
	} else {
		if (isDesktop()) return DESKTOP
		else if (isTablet()) return TABLET
		else if (isMobile()) return MOBILE
	}
}
