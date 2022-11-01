const { Item } = require('../models');

const drinkData = [
  {
    "isFood": false,
    "name": "Lemon Drop",
    "price": 2.00,
    "originalPrice": 5.00,
    "startTime": 3,
    "endTime": 6,
    "dealDay": "Monday",
    "locationId": 1,
    "userId": 5,

  },
  {
    "isFood": false,
    "name": "Margarita Pitcher",
    "price": 9.00,
    "originalPrice": 15.00,
    "startTime": 4,
    "endTime": 7,
    "dealDay": "Tuesday",
    "locationId": 2,
    "userId": 5,

  },
  {
    "isFood": false,
    "name": "Craft Beers",
    "price": 5.00,
    "originalPrice": 7.00,
    "startTime": 5,
    "endTime": 8,
    "dealDay": 'Monday - Friday',
    "locationId": 3,
    "userId": 4,

  },
  {
    "isFood": false,
    "name": "Well Drink",
    "price": 1.50,
    "originalPrice": null,
    "startTime": 4,
    "endTime": 8,
    "dealDay": "Wednesday",
    "locationId": 3,
    "userId": 2,

  },
];

const seedDrink = () => Item.bulkCreate(drinkData);

module.exports = seedDrink;
