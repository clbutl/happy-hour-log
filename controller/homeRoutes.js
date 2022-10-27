const router = require('express').Router();
const { User, Item, Location } = require('../models');
const authUser = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    console.log('Render Homepage lol')
    // res.render('homepage', {
    //   // galleries,
    //   // loggedIn: req.session.loggedIn,
    // })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/users/:id', authUser, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id)
    
    const userData = dbUserData.get({ plain: true });
    console.log('---------------------')
    console.log(userData)
    console.log('---------------------')
    console.log('HELLO')
    console.log('---------------------')
    res.status(200).json(userData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;