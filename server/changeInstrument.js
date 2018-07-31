const config = require('../config/server/config')

module.exports = function changeInstrument(udpPort, bank, pathToInstrument) {
  const fullpath = `${config.bankPath}/${bank}/${pathToInstrument}`
  const msg = {
    address: '/load_xiz',
    args: [
      {
        type: 'i',
        value: 0
      },
      {
        type: 's',
        value: fullpath
      }
    ]
  };
  // console.log("osc: ", msg.address, msg.args);
  udpPort.send(msg);
}