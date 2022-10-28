const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll()

    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    const allUsers = await User.findAll()

    const allUsernames = allUsers.map((user) => user.get({ plain: true }))
    for (let i = 0; i < allUsernames.length; i++) {
      console.log(allUsernames[i].username)
      if (userData.username === allUsernames[i].username) {
        window.alert('Username is already taken :(')
        res.message('USERNAME TAKEN')
        break;
      }
    }
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).json(err);
  }
});

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
      console.log(req.session.user_username)
    });
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
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
