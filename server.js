const express = require('express')
const cors = require('cors')
const path = require('path')
const _ = require('lodash')
const osc = require('osc')

const config = require('./config/server/config')
const { getBanks, getInstruments, changeInstrument } = require('./server') 

const udpPort = new osc.UDPPort({
  localAddress: '127.0.0.1',
  localPort: 6666,

  remoteAddress: '127.0.0.1',
  remotePort: 7777,
  metadata: true
})
udpPort.open()

const app = express()

if (config.cors) {
  app.use(cors())
}

app.use('/assets', express.static(path.join(__dirname, '/public/assets'), { maxAge: config.cacheTime }))

app.get('/api/banks', async (req, res) => {
  try {
    const items = await getBanks()
    res.json({ items })
  } catch (error) {
    res.sendStatus(400).json({ message: 'Error', error })
  }
})

app.get('/api/instruments/:bank', async (req, res) => {
  const { bank } = req.params
  let instruments
  try {
    instruments = await getInstruments(bank)
  } catch (error) {
    res.sendStatus(400).json({ message: 'Error', error })
    return
  }

  const items = _.map(instruments, instrument => {
    let name = instrument
    const matches = /\d{1,4}-([^.]+).xiz/.exec(instrument)
    if (matches && matches.length > 1) {
      [name] = matches
    }

    return {
      bank,
      name,
      path: instrument
    }
  })

  res.json({ items })
})

app.post('/api/instruments/:bank/:instrument', async (req, res) => {
  const { bank, instrument } = req.params
  try {
    await changeInstrument(udpPort, bank, instrument)
    res.json({ message: `Selected instrument: ${instrument}` })
  } catch (error) {
    res.sendStatus(400).json({ message: 'Error', error })
  }
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

const server = app.listen(config.port, config.ip, () => {
  console.log('Server started at port', config.port)
})

module.exports = server