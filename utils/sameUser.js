const { User } = require('./../models');

const sameUser = async (req, res, next) => {
  const allUsers = await User.findOne({ where: { username: req.body.username} })
  if (allUsers === null) {
    next()
  } else {
    res.status(400).json('Username is already taken')
    return;
  }
};

module.exports = sameUser;