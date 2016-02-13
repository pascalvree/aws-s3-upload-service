var uuid = require('uuid');
var config = require(process.env.CONFIGFILE || '../config/config.aws.json');
var controller = require('./controller.js');

controller.Store(
  config,
  {
    key: uuid.v1(),
    bucket: 'aws-s3-store',
    filepath: 'aant/1.txt',
    serverSideEncryption: 'AES256'
  }
);
