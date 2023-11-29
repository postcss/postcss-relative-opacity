const COLOR =
  /oklch\(\s*from\s+([^)]+|\w+\([^)]+\))\s+l\s+c\s+h\s*\/\s*([\d.]+%)\)/g

module.exports = () => {
  return {
    Declaration(decl) {
      if (decl.value.includes('from ')) {
        decl.value = decl.value.replace(COLOR, (match, color, opacity) => {
          return `color-mix(in srgb, ${color} ${opacity}, transparent)`
        })
      }
    },

    postcssPlugin: 'postcss-relative-opacity'
  }
}
module.exports.postcss = true
