const { Item } = require('../models');

const foodData = [
  {
    isFood: true,
    name: 'Fried Chicken',
    pirce: 15.99,
    originalPrice: 18.00,
    dealType: 'Single day',
    dealDay: 'Thursday',
    locationId: 5
  },
  {
    isFood: true,
    name: 'Steak',
    pirce: 19.99,
    originalPrice: 22.00,
    dealType: 'Single day',
    dealDay: 'Friday',
    locationId: 1
  },
  {
    isFood: true,
    name: 'Fish and Chips',
    pirce: 16.99,
    originalPrice: 18.00,
    dealType: 'Everyday',
    dealDay: null,
    locationId: 4
  },
  {
    isFood: true,
    name: 'Pasta Alfredo',
    pirce: 14.99,
    originalPrice: 17.00,
    dealType: 'Everyday',
    dealDay: null,
    locationId: 6
  },
  {
    isFood: true,
    name: 'Burger and Fries',
    pirce: 16.99,
    originalPrice: 19.00,
    dealType: 'Single day',
    dealDay: 'Wednesday',
    locationId: 2
  },
  {
    isFood: true,
    name: 'Southwest Eggrolls',
    pirce: 11.99,
    originalPrice: 13.00,
    dealType: 'Single day',
    dealDay: 'Tuesday',
    locationId: 3
  }
];

const seedFood = () => Item.bulkCreate(foodData);

module.exports = seedFood;
