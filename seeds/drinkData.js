const { Drink } = require('../models');

const drinkData = [
  {
    
  },
];

const seedDrink = () => Drink.bulkCreate(drinkData);

module.exports = seedDrink;
