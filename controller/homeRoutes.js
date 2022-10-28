const router = require('express').Router();
const { User, Item, Location } = require('../models');
const authUser = require('../utils/auth');

// USING MULTER
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./models/userImages")
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, req.session.user_id + ' Profile Picture.jpg')
  }
})
const upload = multer({ storage: storage })


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

router.get('/register', async (req, res) => {
  try {
    res.render('register')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/upload/:username', async (req, res) => {
  try{
    const userData = await User.findAll({
      where: {
        username: req.params.username
      } 
    })
    const user = userData.map((user) => user.get({ plain: true }))
    console.log('------------')
    console.log(user)
    console.log('------------')
    res.render('upload', { user })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.post('/upload/:username', upload.single('image'), async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   where: {
    //     username: req.params.username
    //   } 
    // })
    // const user = userData.map((user) => user.get({ plain: true }))

    res.render('profile')

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Hopefully this works
router.get('/profile', authUser, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;