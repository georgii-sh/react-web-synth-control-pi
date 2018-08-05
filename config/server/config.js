const path = require('path')
require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  cors: true,
  verbose: process.env.VERBOSE_SERVER || false,
  rootPath: path.join(__dirname, '../../public'),
  index: { url: '/', path: 'index.html' },
  assets: { url: '/', path: '/' },
  bankPath: process.env.BANKS_URL || '/usr/local/share/zynaddsubfx/banks/'
}
