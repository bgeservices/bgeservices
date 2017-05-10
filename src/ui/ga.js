function noop () {}

function ga (Vue) {
  Object.defineProperty(Vue.prototype, '$ga', {
    get: function get () {
      if (process.env.NODE_ENV === 'production') {
        window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }
        return window.ga
      } else {
        return noop
      }
    }
  })

  if (process.env.NODE_ENV === 'production') {
    window.ga('send', 'pageview')
  }
}

module.exports = ga
