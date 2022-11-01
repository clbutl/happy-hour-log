const router = require('express').Router();
const { User } = require('../../models');
const sameUser = require('../../utils/sameUser')

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll()

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', sameUser, async (req, res) => {
  try {
    const userData = await User.create({username: req.body.username, password: req.body.password, email: req.body.email, hasPfp: false});
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_username = userData.username;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    req.session.destroy(() => {
      console.log(err)
      res.status(500).end();
    });
  } 
  })

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      console.log('Incorrect email or password, please try again')
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log('Incorrect email or password, please try again')
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_username = userData.username;
      req.session.logged_in = true;
      res.status(200).json({ message: 'You are now logged in!' })
    });
  } catch (err) {
    req.session.destroy(() => {
      console.log(err)
      res.status(500).end();
    });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
