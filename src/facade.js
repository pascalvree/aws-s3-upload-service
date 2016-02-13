var service = require('./service.js');

var Store = function(config, itemToStore) {
  service.Store(config, itemToStore);
}

module.exports = {
  Store: Store,
}
