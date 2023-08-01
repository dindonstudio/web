const languages = [
	{ id: 'en', title: 'English', isDefault: true },
	// { id: 'fr', title: 'French', flag: '🇫🇷' },
]

const defaultLanguage = languages.find(l => l.isDefault)
const otherLanguages = languages.find(l => !l.isDefault)

exports.languages = languages
exports.locales = languages.map(l => l.id)
exports.defaultLocale = defaultLanguage.id
exports.defaultLanguage = defaultLanguage
exports.otherLanguages = otherLanguages
