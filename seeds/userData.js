const { User } = require('../models');

const userData = [
  {
    "username": "clbutler",
    "email": "cannonlbutler@gmail.com",
    "password": "notPasswordLol",
  },
  {
    "username": "dummyData1",
    "email": "dummayData1@gmail.com",
    "password": "DummyData1",
  },
  {
    "username": "dummyData2",
    "email": "dummayData2@gmail.com",
    "password": "DummyData2",
  },
  {
    "username": "dummyData3",
    "email": "dummayData3@gmail.com",
    "password": "DummyData3",
  },
  {
    "username": "dummyData4",
    "email": "dummayData4@gmail.com",
    "password": "DummyData4",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;