const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  cors: true,
  verbose: process.env.VERBOSE_SERVER || false,
  rootPath: path.join(__dirname, '../../public'),
  index: { url: '/', path: 'index.html' },
  assets: { url: '/', path: '/' },
  bankPath: '/home/kelaris/Downloads/zyn-fusion/banks/' // '/usr/local/share/zynaddsubfx/banks/'
}
