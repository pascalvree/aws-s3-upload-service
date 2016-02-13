var aws = require('aws-sdk');

var Store = function(options, callback) {
  aws.config.update({ accessKeyId: options.accessKeyId, secretAccessKey: options.secretAccessKey });
  aws.config.update({ region: options.region });

  var s3obj = new aws.S3(
  {
    params:
    {
      ServerSideEncryption: options.serverSideEncryption,
      Bucket: options.bucket,
      Key: options.key
    }
  });

  s3obj
    .upload({ Body: options.stream })
    .on('httpUploadProgress', function(evt) {
      console.log(evt);
    })
    .send(function(err, data) {
      callback(err, data);
    });
}

module.exports = {
  Store: Store,
}
