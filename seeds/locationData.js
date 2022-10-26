const { Location } = require('../models');

const locationData = [
  {
    "restaurantName": 'Chilis',
    "restaurantCity": 'Columbus',
    "happyHourTimeStart": 4,
    "happyHourTimeEnd": 6
  },
  {
    "restaurantName": 'Rusty bucket',
    "restaurantCity": 'Cleveland',
    "happyHourTimeStart": 4,
    "happyHourTimeEnd": 7
  },
  {
    "restaurantName": 'Applebees',
    "restaurantCity": 'New York City',
    "happyHourTimeStart": 5,
    "happyHourTimeEnd": 8
  },
  {
    "restaurantName": 'BJs',
    "restaurantCity": 'Houston',
    "happyHourTimeStart": 6,
    "happyHourTimeEnd": 8
  },
  {
    "restaurantName": 'Buffalo Wild Wings',
    "restaurantCity": 'San Diego',
    "happyHourTimeStart": 5,
    "happyHourTimeEnd": 7
  },
  {
    "restaurantName": 'Olive Garden',
    "restaurantCity": 'Miami',
    "happyHourTimeStart": 4,
    "happyHourTimeEnd": 7
  }
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
