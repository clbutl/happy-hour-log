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
   
    const itemData = await Item.findAll({
      include: [{model: User, Location}], 
      // order: [['name', 'DSC']],
    });

    // Serialize user data so templates can read it
  const items = itemData.map((item) => item.get({ plain: true }));

  // Pass serialized data into Handlebars.js template
    res.render('homepage', {
       items, 
       logged_in: req.session.logged_in 
      });
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

router.get('/register', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('register')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
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

// Profile route
router.get('/profile', authUser, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item, Location }],
    });

    const user = userData.get({ plain: true });

    console.log(req.session.logged_in)
    console.log(user)

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
      canEdit: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/:username', authUser, async (req, res) => {
  try {
    let canEdit;
    let userId;
    const allUserData = await User.findAll()
    allUserData.forEach((item, index) => {
      if (item.username === req.params.username) {
        if (item.username === req.session.user_username) {
          canEdit = true
          userId = req.session.user_id
        } else {
          canEdit = false
          userId = Number(index) + 1
        }
      }
    })
    const userData = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Item }],
    });

    let user;
    if (userData.get({ plain: true }) === null) {
      user = userData
    } else {
      user = userData.get({ plain: true })
    }
    

    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
      canEdit: canEdit
    });
  } catch (err) {
    console.log(err)
    res.redirect('/')
  }
})






module.exports = router;