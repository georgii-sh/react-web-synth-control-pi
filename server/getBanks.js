const fs = require('fs')
const config = require('../config/server/config')

module.exports = function getBanks() {
  return new Promise((resolve, reject) => {
    fs.readdir(config.bankPath, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}