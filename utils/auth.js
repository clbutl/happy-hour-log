const authorizeUser = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login')
    console.log("You're NOT cool and NOT logged in btw")
  } else {
    console.log("You're cool and logged in btw")
    next()
  }
};

module.exports = authorizeUser;