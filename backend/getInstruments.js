const fs = require('fs')
const config = require('../config/server/config')
const _ = require('lodash')

function _formatInstruments(bank, items) {
  const instruments = _.filter(items, item => item.match(/\d{1,4}-([^.]+).xiz/))
  return _.map(instruments, instrument => {
    return {
      bank,
      id: instrument,
      title: instrument.replace(/[-_]/g, ' ').replace('.xiz','')
    }
  })
}

module.exports = function getInstruments(bank) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${config.bankPath + bank}/`, (err, files) => {
      return err ? reject(err) : resolve(_formatInstruments(bank, files))
    })
  })
}
