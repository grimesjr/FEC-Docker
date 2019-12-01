const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'Derty321$',
  database: 'yelp'
});

connection.connect();

let mysqlQueries = {

  getReviews: function(name, callback) {
    connection.query(`SELECT * from restaurants WHERE name = '${name}';`, function(err, data) {
      if(err) {
        console.log('mysql error');
      } else {
        callback(null, data);
      }
   });
  },

  getRestaurantReviews: function(name, callback) {
    connection.query(`SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id INNER JOIN users ON users.id = reviews.user_id where restaurants.name = '${name}';`, function(err, data) {
      if(err) {
        console.log('get restaurant review error');
      } else {
        callback(null, data);
      }
    });
  }
}

module.exports = mysqlQueries;