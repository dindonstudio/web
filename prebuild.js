const {colors} = require('../config/variables')
const fs = require('fs/promises')

fs.writeFile(
	'./src/styles/utils/generated.scss',
	/* scss */`/* === AUTO GENERATED FILE === */

${Object.entries(colors).map(([key, value]) => `$${key}: ${value.hex.toLowerCase()};`).join('\n')}
`)
