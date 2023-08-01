
/**
 * Check if a hexadecimal color is light or dark.
 * @param {String} color
 * @returns Boolean
 */
export const isLightColor = (color, luma = 165) => computeLuma(color) >= luma

/**
 * Compute Luma of a hexadecimal color.
 * @param {String} color
 * @returns Number
 */
const computeLuma = color => {
	const rgb = hexToRGB(color)
	return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2] // SMPTE C, Rec. 709 weightings
}

/**
 * Convert hexadecimal color string to RGB array of numbers.
 * @param {String} color
 * @returns Array<Number>
 */
const hexToRGB = color => {
	const _color = color.replace('#', '')
	const rgb = []
	for (let i = 0; i <= 2; i++) rgb[i] = parseInt(_color.substr(i * 2, 2), 16)
	return rgb
}

export const themeToCSS = (theme, inverted = false) => theme ? {
	'--color-bg': inverted ? theme.text : theme.bg,
	'--color-text': inverted ? theme.bg : theme.text,
} : {}

export const invertedTheme = (theme) => theme ? {bg: theme.text, text: theme.bg} : undefined
