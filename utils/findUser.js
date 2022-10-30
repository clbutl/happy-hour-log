const { User } = require('./../models');

const currentUser = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email} })
  return user.username
};

module.exports = currentUser;