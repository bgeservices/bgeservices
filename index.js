// if (process.env.NODE_ENV === 'production') {
//   var Vue = require('vue')
//   var Raven = require('raven-js')
//   var RavenVue = require('raven-js/plugins/vue')
//   Raven
//     .config('https://93be86fbce7f4ebab4d9e0abf3dcee17@sentry.io/145052')
//     .addPlugin(RavenVue, Vue)
//     .install()
// }

var app = module.exports = {
  services: require('./src/services'),
  ui: require('./src/ui'),
}

app.ui.$mount('#main')

module.exports = app

if (process.env.NODE_ENV !== 'production') {
  global.app = app
}
