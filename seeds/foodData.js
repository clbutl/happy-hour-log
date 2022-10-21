const { Food } = require('../models');

const foodData = [
  {
    
  },
];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;
