const { User } = require('./../models');

const sameUser = async (req, res, next) => {
  const allUsers = await User.findOne({ where: { username: req.body.username} })
  console.log(allUsers)
  if (allUsers === null) {
    next()
  } else {
    res.status(400).json('yoo')
    return;
  }
};

module.exports = sameUser;