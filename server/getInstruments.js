const fs = require('fs')
const config = require('../config/server/config')

module.exports = function getInstruments(bank) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${config.bankPath + bank}/`, (err, files) => {
      return err ? reject(err) : resolve(files)
    })
  })
}
