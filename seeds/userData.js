const { User } = require('../models');

const userData = [
  {
    "username": "clbutler",
    "email": "cannonlbutler@gmail.com",
    "password": "$2b$10$oone1oX2EGXskQv4laal1OIgkrdNzWkGrehKJvPHfFtIQnV.YdwnS",
  },
  {
    "username": "HappyUser4",
    "email": "driftiqss@gmail.com",
    "password": "$2b$10$uYBXb6C1QN15vxAOrPL/vO0MoTNXOvnhdYE0dAwthCVL/fKGaa2Om",
  },
  {
    "username": "ResponsiveDot2",
    "email": "test3@gmail.com",
    "password": "$2b$10$pJ.N342ofz7ocykXbrywo.Rberg0y4kEl3/wfIukkFOYt0c7fVbY.",
  },
  {
    "username": "Great!Trainer",
    "email": "test4@gmail.com",
    "password": "$2b$10$mIa9HiKJlbTeOdVUmRBsEOkd7m5JploK0DlsMrHw3kTz.B072qjyO",
  },
  {
    "username": "glider44",
    "email": "test5@gmail.com",
    "password": "$2b$10$mQxVm.B3UAq6wWVKMJUCaeOSMrbv1zUDe5ISvWeYUJ15gO2qtPJfi",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;