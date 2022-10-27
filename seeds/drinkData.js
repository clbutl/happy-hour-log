const { Item } = require('../models');

const drinkData = [
  {
    "isFood": false,
    "name": "Lemon Drop",
    "price": 2.00,
    "originalPrice": 5.00,
    "dealType": "single day",
    "dealDay": "Monday",
    "locationId": 1,
    "userId": 1,

  },
  {
    "isFood": false,
    "name": "Margarita Pitcher",
    "price": 9.00,
    "originalPrice": 15.00,
    "dealType": "single day",
    "dealDay": "Tuesday",
    "locationId": 2,
    "userId": 3,

  },
  {
    "isFood": false,
    "name": "Craft Beers",
    "price": 5.00,
    "originalPrice": 7.00,
    "dealType": "everyday",
    "dealDay": null,
    "locationId": 3,
    "userId": 4,

  },
  {
    "isFood": false,
    "name": "Well Drink",
    "price": 1.50,
    "originalPrice": null,
    "dealType": "single day",
    "dealDay": "Wednesday",
    "locationId": 3,
    "userId": 2,

  },
];

const seedDrink = () => Item.bulkCreate(drinkData);

module.exports = seedDrink;
