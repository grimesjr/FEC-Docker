const s3 = require('./AWS.js');
const fs = require('fs');

const BUCKET = 'yelpfoodpics';

const s3Upload = {
  upload: function(fileName) {
    const fileContent = fs.readFileSync(fileName);

    const params = {
      Bucket: BUCKET,
      Key: 'test.jpg',
      Body: fileContent,
      ACL:'public-read-write'
    };

    s3.upload(params, function(err, data) {
      if(err) {
        throw err;
      }
      console.log(`File uploaded successfully. ${data}`);
    })
  }
}

s3Upload.upload('testing.jpg');

module.exports = s3Upload;