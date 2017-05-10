module.exports = {
  label: 'Е-услуги',
  nsi: require('./nsi'),
  municipalities: require('./municipalities'),
}

function normalize (list) {
  // if it's a leaf node
  if (list.label && list.desc && list.link) {
    list.isService = true
    list.isList = false
    list.isSecure = list.isSecure !== false
    return
  }

  // dive into the sublists
  for (var key in list) {
    if (typeof list[ key ] !== 'object') continue
    normalize(list[ key ])
  }
}

normalize(module.exports)
