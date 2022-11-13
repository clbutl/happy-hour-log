const authUser = (req, res, next) => {
  if (req.session.logged_in) {
    // Funny but remove before final submission!
    console.log("You're cool and logged in btw")
    console.log(req.session.logged_in)
    next()
  } else {
    res.redirect('/login')
    // Funny but remove before final submission!
    console.log("You're NOT cool and NOT logged in btw")
    console.log(req.session.logged_in)
  }
};

module.exports = authUser;