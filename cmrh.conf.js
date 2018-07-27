const sass = require('node-sass')
const path = require('path')

function isScss(filename) {
  return filename.match(/\.scss$/)
}

module.exports = {
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.scss', '.css'],
  preprocessCss: (data, filename) => {
    let css = data
    if (isScss(filename)) {
      css = `@import "variables.scss";\n ${data}`
    }
    return sass.renderSync({
      data: css,
      file: filename,
      includePaths: [path.resolve(__dirname, './scss')]
    }).css
  }
}
