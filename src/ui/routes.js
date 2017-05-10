var services = require('../services')
var fragmentServices = require('./fragments/services.vue')

module.exports = [
  { path: '/', component: fragmentServices, props: { services: services } },
]

function generateRoutes(services) {
  if (typeof services !== 'object') return
  if (services.isService) return
  if (!services.path) return
  module.exports.push({
    path: services.path,
    component: fragmentServices,
    props: {
      services: services
    }
  })

  for (var key in services) {
    generateRoutes(services[key])
  }
}

generateRoutes(services)
