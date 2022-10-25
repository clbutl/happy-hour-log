const { Item } = require('../models');

const drinkData = [
  {
    "isFood": false,
    "name": "Lemon Drop",
    "price": 2.00,
    "originalPrice": 5.00,
    "dealType": "single day",
    "dealDay": "Monday",
    "location_id": 1
  },
  {
    "isFood": false,
    "name": "Margarita Pitcher",
    "price": 9.00,
    "originalPrice": 15.00,
    "dealType": "single day",
    "dealDay": "Tuesday",
    "location_id": 2
  },
  {
    "isFood": false,
    "name": "Craft Beers",
    "price": 5.00,
    "originalPrice": 7.00,
    "dealType": "everyday",
    "dealDay": null,
    "location_id": 3
  },
  {
    "isFood": false,
    "name": "Well Drink",
    "price": 1.50,
    "originalPrice": null,
    "dealType": "single day",
    "dealDay": "Wednesday",
    "location_id": 3
  },
];

const seedDrink = () => Item.bulkCreate(drinkData);

module.exports = seedDrink;
