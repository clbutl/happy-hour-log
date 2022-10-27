const sequelize = require('../config/connection');
const seedDrink = require('./drinkData');
const seedFood = require('./foodData');
const seedUser = require('./userData');
const seedLocation = require('./locationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedLocation();
  console.log('---SEEDED LOCATION---')
  
  await seedUser();
  console.log('---SEEDED USER---')

  await seedDrink();
  console.log('---SEEDED DRINK---')
  
  await seedFood();
  console.log('---SEEDED FOOD---')

  process.exit(0);
};

seedAll();