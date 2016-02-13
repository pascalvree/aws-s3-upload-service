var fs = require('fs');
var facade = require('./facade.js');

// var stream = new Readable();
// stream.push(JSON.stringify(req.body, null, 4))    // the string you want
// stream.push(null)      // indicates end-of-file basically - the end of the stream

var Store = function(key, filepath) {
  facade.Store({
    key: key,
    stream: fs.createReadStream(filepath),
    callback: function(err, data) { console.log(err, data); }
  });
}

module.exports = {
  Store: Store,
}
