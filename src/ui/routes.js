var services = require('../services')

module.exports = [
  { path: '/', component: require('./fragments/services.vue'), props: { services: services } },
  { path: '/nsi', component: require('./fragments/services.vue'), props: { services: services.nsi } },
  {
    path: '/plovdiv',
    component: require('./fragments/services.vue'),
    props: { services: services.municipalities.plovdiv }
  },
]

