var aws = require('aws-sdk');

var Store = function(config, itemToStore) {
  aws.config.update({ accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey });
  aws.config.update({ region: config.region });

  var s3obj = new aws.S3(
  {
    params:
    {
      ServerSideEncryption: itemToStore.serverSideEncryption,
      Bucket: itemToStore.bucket,
      Key: itemToStore.key
    }
  });

  s3obj
    .upload({ Body: itemToStore.stream })
    .on('httpUploadProgress', function(evt) { console.log(evt); })
    .send(function(err, data) { itemToStore.callback(err, data); });
}

module.exports = {
  Store: Store,
}
