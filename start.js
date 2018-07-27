require('dotenv').config()
const Saco = require('saco')
const debug = require('debug')('front-end-server:start')
const options = require('./config/server/config')

debug('Starting %O server..', process.env.NODE_ENV)

new Saco.Server(options)
  .start()
  .then(() => {
    debug('Ready!')
  })
  .catch(err => {
    debug('Error!', err)
  })
