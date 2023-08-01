
export const sanityBlockContentToString = (blocks, withLineBreaks = true) =>
	blocks && Array.isArray(blocks)
		? blocks.map((block) => block.children.map((child) => child.text).join('')).filter(p => p.trim() !== '').join(withLineBreaks ? '\n' : ' ')
		: undefined

export const splitWords = (text, wrapWords = false) => {
	return text
		.replace(/\n/g, ' <br/> ')
		.split(/ /)
		.map(word => word === '<br/>' ? '<br/>' : wrapWords ? `<span><span>${word}</span></span>` : `<span>${word}</span>`)
		.join(' ')
		.replace(/ <br\/> /g, '<br/>')
}

export const splitChars = (text) => {
	return text.replace(/\n/g, ' <br/> ')
		.split(/ /)
		.map(word => {
			const chars = word.split(/(?!$)/u).map((char) => `<span>${char}</span>`).join('')
			return (word === '<br/>' ? '<br/>' : `<div>${chars}</div>`)
		})
		.join(' ')
		.replace(/ <br\/> /g, '<br/>')
}
