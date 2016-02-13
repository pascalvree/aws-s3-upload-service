var service = require('./service.js');
var partialConfig = require('./config.aws.s3.json');

var Store = function(suppliedConfig) {
  var completeConfig = partialConfig;
  completeConfig.key = suppliedConfig.key;
  completeConfig.stream = suppliedConfig.stream;

  service.Store(completeConfig, suppliedConfig.callback);
}

module.exports = {
  Store: Store,
}
