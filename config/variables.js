const colors = {
  black: '#101217',
  white: '#fff',
  purple: '#5750f1',
  lightBlue: '#C9D6CB',
  purpleLight: '#d0ceff',
  purpleDark: '#CEC4CE',
  green: '#83DBA0',
  greenDark: '#17403E',
  greenLight: '#d3ded4',
  yellow: '#f4e97f',
  pinkDark: '#E1C7B3',
  pink: '#FACDBE',
  pinkPurple: '#D8C1ED',
  pinkLight: '#FFE3DA',
}

const hexToRgba = (hex, a = 1) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  // return result ? {
  //   r: parseInt(result[1], 16),
  //   g: parseInt(result[2], 16),
  //   b: parseInt(result[3], 16)
  // } : null
  return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${a})` : null
}

// exports.colors = colors
// exports.colorsRGB = Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, v * v]))
exports.colors = Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, {
  name: k,
  hex: v,
  rgb: hexToRgba(v),
  rgba: (a) => hexToRgba(v, a),
}]))
