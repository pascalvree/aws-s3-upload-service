var config = require(process.env.CONFIGFILE || '../config/config.aws.json');
var controller = require('./controller.js');

controller.Store(
  config,
  {
    key: '1.txt',
    bucket: 'aws-s3-store',
    filepath: 'aant/1.txt',
    serverSideEncryption: 'AES256'
  }
);
