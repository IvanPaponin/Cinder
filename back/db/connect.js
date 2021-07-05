const mongoose = require('mongoose')
const { DB_CONNECT, options } = require('./config')

function connect() {
  mongoose.connect(DB_CONNECT, options, (err) => {
    if (err) console.log('ERROR WITH DB')

    console.log('Connect to DB')
  })
}

function disconnect() {
  mongoose.disconnect()
}

module.exports = { connect, disconnect }
