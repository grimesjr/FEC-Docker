const express = require('express');
const db = require('../database/model.js');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/restaurantReviews/', function(req, res) {

  db.getReviews(function(err, data) {
    if(err) {
      console.log('get reviews', err);
    } else {
      res.status(200).send(data);
    }
  });
})

app.get('/restaurantReviews/:name', function(req, res) {
  let name = req.params.name;
  console.log(name);
  db.getRestaurantReviews(name, function(err, data) {
    if(err) {
      console.log('error get restaurant reviews');
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, console.log(`Listening on port ${port}`));