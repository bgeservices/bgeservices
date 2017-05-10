var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)
Vue.use(require('bootstrap-vue'))

Vue.component('fragment-navbar', require('./fragments/navbar.vue'))
Vue.component('fragment-nsi-services', require('./fragments/nsi-services.vue'))
Vue.component('fragment-service', require('./fragments/service.vue'))

var router = new VueRouter({
  routes: require('./routes')
})

var layout = require('./layout.vue')

layout.router = router

var ui = new Vue(layout)

module.exports = ui
