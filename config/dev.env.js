var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
require('dotenv').config()
var clienteGoogle = process.env.CLIENTID
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CLIENTID: '"'+clienteGoogle+'"'
})
