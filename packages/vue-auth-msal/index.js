'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-auth-msal.min.cjs')
} else {
  module.exports = require('./dist/vue-auth-msal.cjs')
}
