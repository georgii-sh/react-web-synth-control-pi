const fs = require('fs')
const path = require('path')

function RenameBundlePlugin() {}

RenameBundlePlugin.prototype.apply = compiler => {
  compiler.plugin('done', () => {
    const timestamp = new Date().getTime()
    const versionedBundleName = `bundle_${timestamp}.js`

    const content = fs.readFileSync(path.join(__dirname, '../../public/index.html')).toString()
    const newContent = content.replace('bundle.js', versionedBundleName)
    fs.writeFileSync(path.join(__dirname, '../../public/index.html'), newContent)
    fs.renameSync(
      path.join(__dirname, '../../public/bundle.js'),
      path.join(__dirname, `../../public/${versionedBundleName}`)
    )
  })
}

module.exports = RenameBundlePlugin
