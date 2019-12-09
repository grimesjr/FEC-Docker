const AWS = require('aws-sdk');

const ID = 'AKIAJ45YJREG4TIGGTFQ';
const SECRET = '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';
const BUCKET = 'yelpfoodpics';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
})

module.exports = s3;