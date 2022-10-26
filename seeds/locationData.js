const { Location } = require('../models');

const locationData = [
  {
    "restaurantName": 'Chilis',
    "restaurantCity": 'Columbus',
    "happyHourTimeStart": '16:00',
    "happyHourTimeEnd": '18:00'
  },
  {
    "restaurantName": 'Rusty bucket',
    "restaurantCity": 'Cleveland',
    "happyHourTimeStart": '16:00',
    "happyHourTimeEnd": '18:00'
  },
  {
    "restaurantName": 'Applebees',
    "restaurantCity": 'New York City',
    "happyHourTimeStart": '16:30',
    "happyHourTimeEnd": '18:30'
  },
  {
    "restaurantName": 'BJs',
    "restaurantCity": 'Houston',
    "happyHourTimeStart": '16:00',
    "happyHourTimeEnd": '18:00'
  },
  {
    "restaurantName": 'Buffalo Wild Wings',
    "restaurantCity": 'San Diego',
    "happyHourTimeStart": '17:00',
    "happyHourTimeEnd": '19:00'
  },
  {
    "restaurantName": 'Olive Garden',
    "restaurantCity": 'Miami',
    "happyHourTimeStart": '16:00',
    "happyHourTimeEnd": '20:00'
  }
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
