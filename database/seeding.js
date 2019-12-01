const faker = require('faker');
const mysql = require('mysql');
const restaurantsList = require('./restaurantList.js');
const restaurants = restaurantsList.restaurants;
const numUsers = 300;
const numReviews = 1200;
const numRestaurants = restaurants.length;


const connection = mysql.createConnection({
  user: 'root',
  password: 'Derty321$',
  database: 'yelp'
});

connection.connect();

let mySQLqueries = {

  seedRestaurants: function() {
    let query = `INSERT INTO restaurants (name) VALUES `;
    for (let i = 0; i < restaurants.length; i++) {
      if(i === restaurants.length - 1) {
        query += `('${restaurants[i]}');`;
      } else {
        query += `('${restaurants[i]}'),`;
      }
    }
    connection.query(query, function(err, data) {
      if(err) {
        console.log('seed restaurant error', err);
      } else {
        console.log('seed restaurants succeed.');
      }
    });
  },

  seedUsers: function() {
    let query = `INSERT INTO users (name, location, friends, picture) VALUES `;

    for (let i = 0; i < numUsers; i++) {
      let firstName = faker.name.firstName();
      let lastInitial = String.fromCharCode(Math.floor((Math.random() * 26) + 65)) + '.';
      let name = `${firstName} ${lastInitial}`;
      let location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
      let friends = Math.floor(Math.random() * 200);
      let picture = faker.image.avatar();
      
      if(i === numUsers - 1) {
        query += `('${name}', '${location}', '${friends}', '${picture}');`;
      } else {
        query += `('${name}', '${location}', '${friends}', '${picture}'), `;
      }
    }
    connection.query(query, function(err, data) {
      if(err) {
        console.log('seed users error', err);
      } else {
        console.log('seed users succeed.');
      }
    });
  },

  seedReviews: function() {
    
    //select random restaurant and user
    for(let i = 0; i < numReviews; i++) {
      let date = faker.date.recent(1600).toISOString().split('T')[0]
      let review = faker.lorem.paragraph();
      let stars = 5;
      let restaurantId = Math.floor(Math.random() * numRestaurants);
      let userId = Math.floor(Math.random() * numUsers);
      let query = `INSERT INTO reviews(date, review, stars, user_id, restaurant_id) VALUES `;

      query += `('${date}', '${review}', ${stars}, ${userId}, ${restaurantId}); `;  
    
      let links = ['http://lorempixel.com/400/200/food/', 'http://lorempixel.com/400/200/food/'];
      connection.query(query, function(err, data) {
        if(err) {
          console.log('query error', err);
        } else {
          if(links.length > 0) {
            let lastInsertId = data.insertId;
            let reviewPicQuery = `INSERT INTO reviewpictures (links, review_id) VALUES ('${links}', ${lastInsertId});`;
            connection.query(reviewPicQuery, function(err, data) {
              if(err) {
                console.log('error review pics', err);
              } else {
                // connection.end();
              }
            });
          } else {
            // connection.query(`COMMIT;`);
            // connection.end();
          }
        }
      });
    }
  }
}

// mySQLqueries.seedRestaurants();
mySQLqueries.seedUsers();
mySQLqueries.seedReviews();
