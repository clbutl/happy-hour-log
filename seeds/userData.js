const { User } = require('../models');

const userData = [
  {
    "username": "clbutler",
    "email": "cannonlbutler@gmail.com",
    "password": "notPasswordLol",
    "hasPfp": false
  },
  {
    "username": "dummyData1",
    "email": "dummayData1@gmail.com",
    "password": "DummyData1",
    "hasPfp": false
  },
  {
    "username": "dummyData2",
    "email": "dummayData2@gmail.com",
    "password": "DummyData2",
    "hasPfp": false
  },
  {
    "username": "dummyData3",
    "email": "dummayData3@gmail.com",
    "password": "DummyData3",
    "hasPfp": false
  },
  {
    "username": "test",
    "email": "test@gmail.com",
    "password": "$2b$10$oone1oX2EGXskQv4laal1OIgkrdNzWkGrehKJvPHfFtIQnV.YdwnS",
    "hasPfp": false
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;