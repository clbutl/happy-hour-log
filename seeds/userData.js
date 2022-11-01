const { User } = require('../models');

const userData = [
  {
    "username": "test",
    "email": "test@gmail.com",
    "password": "$2b$10$oone1oX2EGXskQv4laal1OIgkrdNzWkGrehKJvPHfFtIQnV.YdwnS",
  },
  {
    "username": "test2",
    "email": "test2@gmail.com",
    "password": "$2b$10$uYBXb6C1QN15vxAOrPL/vO0MoTNXOvnhdYE0dAwthCVL/fKGaa2Om",
  },
  {
    "username": "test3",
    "email": "test3@gmail.com",
    "password": "$2b$10$pJ.N342ofz7ocykXbrywo.Rberg0y4kEl3/wfIukkFOYt0c7fVbY.",
  },
  {
    "username": "test4",
    "email": "test4@gmail.com",
    "password": "$2b$10$mIa9HiKJlbTeOdVUmRBsEOkd7m5JploK0DlsMrHw3kTz.B072qjyO",
  },
  {
    "username": "test5",
    "email": "test5@gmail.com",
    "password": "$2b$10$mQxVm.B3UAq6wWVKMJUCaeOSMrbv1zUDe5ISvWeYUJ15gO2qtPJfi",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;