const sequelize = require('../config/connection');
const seedDrink = require('./drinkData');
const seedFood = require('./foodData');
const seedUser = require('./userData');
const seedLocation = require('./locationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDrink();
  console.log('---SEEDED DRINK---')
  
  await seedFood();
  console.log('---SEEDED FOOD---')
  
  await seedUser();
  console.log('---SEEDED USER---')

  await seedLocation();
  console.log('---SEEDED LOCATION---')

  process.exit(0);
};

seedAll();