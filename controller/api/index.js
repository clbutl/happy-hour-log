const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const drinkRoutes = require('./drinkRoutes');
const itemRoutes = require('./itemRoutes');
const locationRoutes = require('./locationRoutes')



router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/drink', drinkRoutes);
router.use('/item', itemRoutes);
router.use('/location', locationRoutes);



module.exports = router;
