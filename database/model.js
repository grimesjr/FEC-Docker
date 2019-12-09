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

  getRestaurantReviews: function(name, sort, callback) {
    let direction = '';
    let sortBy = ''
    if(sort === 'Oldest' || sort === 'Newest'){ 
      sortBy = 'date';
      sort === 'Oldest' ? direction = 'ASC' : direction = 'DESC';
    }
    if(sort === 'Highest' || sort === 'Lowest'){ 
      sortBy = 'stars';
      sort === 'Highest' ? direction = 'ASC' : direction = 'DESC';
    }
    connection.query(`SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id = reviews.restaurant_id INNER JOIN users ON users.id = reviews.user_id LEFT JOIN reviewpictures ON reviewpictures.review_id = reviews.id WHERE restaurants.name = '${name}' ORDER BY reviews.${sortBy} ${direction} LIMIT 20;`, function(err, data) {
      if(err) {
        console.log('get restaurant review error');
      } else {
        callback(null, data);
      }
    });
  }
}

module.exports = mysqlQueries;