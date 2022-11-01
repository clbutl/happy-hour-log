const { Item } = require('../models');

const foodData = [
  {
    "isFood": true,
    "name": 'Fried Chicken',
    "price": 15.99,
    "originalPrice": 18.00,
    "startTime": 4,
    "endTime": 6,
    "dealDay": 'Thursday',
    "locationId": 5,
    "userId": 3,
  },
  {
    "isFood": true,
    "name": 'Steak',
    "price": 19.99,
    "originalPrice": 22.00,
    "startTime": 4,
    "endTime": 7,
    "dealDay": 'Friday',
    "locationId": 1,
    "userId": 1,
  },
  {
    "isFood": true,
    "name": 'Fish and Chips',
    "price": 16.99,
    "originalPrice": 18.00,
    "startTime": 3,
    "endTime": 6,
    "dealDay": 'Monday - Friday',
    "locationId": 4,
    "userId": 2,
  },
  {
    "isFood": true,
    "name": 'Pasta Alfredo',
    "price": 14.99,
    "originalPrice": 17.00,
    "startTime": 5,
    "endTime": 8,
    "dealDay": 'Monday - Sunday',
    "locationId": 6,
    "userId": 4,
  },
  {
    "isFood": true,
    "name": 'Burger and Fries',
    "price": 16.99,
    "originalPrice": 19.00,
    "startTime": 4,
    "endTime": 8,
    "dealDay": 'Wednesday',
    "locationId": 2,
    "userId": 5,
  },
  {
    "isFood": true,
    "name": 'Southwest Eggrolls',
    "price": 11.99,
    "originalPrice": 13.00,
    "startTime": 6,
    "endTime": 9,
    "locationId": 3,
    "userId": 5,
  }
];

const seedFood = () => Item.bulkCreate(foodData);

module.exports = seedFood;
