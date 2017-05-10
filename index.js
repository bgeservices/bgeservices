if (process.env.NODE_ENV === 'production') {
  var Vue = require('vue')
  var Raven = require('raven-js')
  var RavenVue = require('raven-js/plugins/vue')
  Raven
    .config('https://77515e99a036430f834eb0263e0e7215@sentry.io/166996')
    .addPlugin(RavenVue, Vue)
    .install()
}

var app = module.exports = {
  services: require('./src/services'),
  ui: require('./src/ui'),
}

app.ui.$mount('#main')

module.exports = app

if (process.env.NODE_ENV !== 'production') {
  global.app = app
}
