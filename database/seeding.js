const faker = require('faker');
const mysql = require('mysql');
const restaurantsList = require('./restaurantList.js');
const restaurants = restaurantsList.restaurants;
const numUsers = 5;
const numReviews = 100;
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
    let query = `INSERT INTO reviews(date, review, stars, userId, restaurantId) VALUES `;
    for(let i = 0; i < numReviews; i++) {
      let date = faker.date.recent(1600).toISOString().split('T')[0]
      let review = 'testing';
      let stars = 5;
      let restaurantId = Math.floor(Math.random() * numRestaurants);
      let userId = Math.floor(Math.random() * numUsers);
      let link = ['http://lorempixel.com/400/200/food/', 'http://lorempixel.com/400/200/food/'];
      // let query = `SELECT @randRest:=ROUND(RAND() * (SELECT MAX(id) FROM restaurants)); `;
      // query += `SELECT @randUser:=ROUND(RAND() * (SELECT MAX(id) FROM users)); `;
      
      if(i === numReviews - 1) {
        query += `('${date}', '${review}', ${stars}, ${userId}, ${restaurantId}); `;
      } else {
        query += `('${date}', '${review}', ${stars}, ${userId}, ${restaurantId}), `;
      }    
    }

    let start = 'START TRANSACTION';
    connection.query(start, function(err, data) {
      if(err) {
        console.log('seed reviews error', err);
      } else {
        connection.query(query, function(err, data) {
          if(err) {
            console.log('query error');
          } else {
            if(link.length > 0) {
              connection.query(`INSERT INTO reviewPictures (links, reviewId) VALUES ('${links}', LAST_INSERT_ID);`, function(err, data) {
                if(err) {
                  console.log('error review pics');
                } else {
                  connection.end();
                }
              });
            } else {
              connection.end()
            }
          }
        })
      }
    });
      
      //insert into reviewPic
      // let pictures = '';
      // if(pictures.length > 0) {
      //   let query = `INSERT INTO reviewPics(links, reviewId) VALUES ('${pictures}', LAST_INSERT_ID());`;
      //   connection.query(query, function(err, data) {
      //     if(err) {
      //       console.log('seed reviewPics error', err);
      //     } else {
      //       console.log('seed reviewPics succeed');
      //     }
      //   });
      // }
    


  }
}

mySQLqueries.seedReviews();
// console.log(faker.date.recent(100).toISOString().split('T')[0]);


/*
CREATE TABLE users (
  id int not null auto_increment,
  name varchar(20) not null,
  location varchar(30) not null,
  friends smallint default 0,
  elite tinyint(1) default 0,
  picture varchar(150) not null,
  numReviews smallint default 0,
  numPics smallint default 0,
  primary key(id)
  );

CREATE TABLE restaurants (
  id int not null auto_increment,
  name varchar(30) not null,
  primary key(id)
);

CREATE TABLE reviews (
  id int not null auto_increment primary key,
  date date not null,
  stars tinyint not null,
  useful tinyint default 0,
  funny tinyint default 0,
  cool tinyint default 0,
  user_id int,
  restaurant_id int,
  foreign key (user_id) references users(id),
  foreign key (restaurant_id) references restaurants(id)
);

CREATE TABLE reviewPictures (
  id int not null auto_increment primary key,
  links varchar(1200),
  review_id int not null,
  foreign key (review_id) references reviews(id)
);
*/
// mySQLqueries.seedRestaurants();