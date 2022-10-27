const router = require('express').Router();
const { User, Item, Location } = require('../models');
const authUser = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      include: [{
        model: Item, Location, 
        attributes: ['name', 'price', 'originalPrice', 'dealDay', 'dealType', 'restaurantName' ]
      }], 
      // order: [['name', 'DSC']],
    });

    // Serialize user data so templates can read it
  const users = userData.map((user) => user.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

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