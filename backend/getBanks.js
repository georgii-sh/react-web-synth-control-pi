const fs = require('fs')
const config = require('../config/server/config')
const _ = require('lodash')

function _formatBanks(items) {
  return _.map(items, item => {
    return {
      id: item,
      title: item.replace(/[-_]/g, ' ')
    }
  })
}

module.exports = function getBanks() {
  return new Promise((resolve, reject) => {
    fs.readdir(config.bankPath, (err, files) => {
      return err ? reject(err) : resolve(_formatBanks(files))
    })
  })
}