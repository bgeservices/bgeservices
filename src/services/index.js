module.exports = {
  label: 'Е-услуги',
  nsi: require('./nsi'),
  municipalities: require('./municipalities'),
}

function normalize (path, list) {
  // if it's a leaf node
  if (list.label && list.desc && list.link) {
    list.isService = true
    list.isList = false
    list.isSecure = list.isSecure !== false
    list.path = path
    return false
  }

  list.path = path
  list.hasNestedLists = false
  // dive into the sublists
  for (var key in list) {
    if (typeof list[ key ] !== 'object') continue
    if (normalize(path + key + '/', list[ key ])) {
      list.hasNestedLists = true
    }
  }
  return true
}

normalize('/', module.exports)
