const path = require('path')

module.exports = {
  port: process.env.PORT,
  cors: true,
  verbose: process.env.VERBOSE_SERVER || false,
  rootPath: path.join(__dirname, '../../public'),
  index: { url: '/', path: 'index.html' },
  assets: { url: '/', path: '/' },
  bankPath: '/usr/local/share/zynaddsubfx/banks/'
}
