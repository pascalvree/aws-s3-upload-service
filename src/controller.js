var facade = require('./facade.js');
var fs = require('fs');

// var stream = new Readable();
// stream.push(JSON.stringify(req.body, null, 4)); // the string you want
// stream.push(null); // indicates end-of-file basically - the end of the stream

var Store = function(config, itemToStore) {
  facade.Store(
    config,
    {
      key: itemToStore.key,
      bucket: itemToStore.bucket,
      stream: fs.createReadStream(itemToStore.filepath),
      callback: function(err, data) { console.log(err, data); }
    }
  );
}

module.exports = {
  Store: Store,
}
