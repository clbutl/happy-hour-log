const { Item } = require('../models');

const foodData = [
  {
    "isFood": true,
    "name": 'Fried Chicken',
    "price": 15.99,
    "originalPrice": 18.00,
    "dealType": 'Single day',
    "dealDay": 'Thursday',
    "locationId": 5,
    "userCreated": 3,
  },
  {
    "isFood": true,
    "name": 'Steak',
    "price": 19.99,
    "originalPrice": 22.00,
    "dealType": 'Single day',
    "dealDay": 'Friday',
    "locationId": 1,
    "userCreated": 1,
  },
  {
    "isFood": true,
    "name": 'Fish and Chips',
    "price": 16.99,
    "originalPrice": 18.00,
    "dealType": 'Everyday',
    "dealDay": null,
    "locationId": 4,
    "userCreated": 2,
  },
  {
    "isFood": true,
    "name": 'Pasta Alfredo',
    "price": 14.99,
    "originalPrice": 17.00,
    "dealType": 'Everyday',
    "dealDay": null,
    "locationId": 6,
    "userCreated": 4,
  },
  {
    "isFood": true,
    "name": 'Burger and Fries',
    "price": 16.99,
    "originalPrice": 19.00,
    "dealType": 'Single day',
    "dealDay": 'Wednesday',
    "locationId": 2,
    "userCreated": 5,
  },
  {
    "isFood": true,
    "name": 'Southwest Eggrolls',
    "price": 11.99,
    "originalPrice": 13.00,
    "dealType": 'Single day',
    "locationId": 3,
    "userCreated": 5,
  }
];

const seedFood = () => Item.bulkCreate(foodData);

module.exports = seedFood;
