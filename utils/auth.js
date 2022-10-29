const authUser = (req, res, next) => {
  if (req.session.logged_in) {
    console.log("You're cool and logged in btw")
    console.log(req.session.logged_in)
    next()
  } else {
    res.redirect('/login')
    console.log("You're NOT cool and NOT logged in btw")
    console.log(req.session.logged_in)
  }
};

module.exports = authUser;