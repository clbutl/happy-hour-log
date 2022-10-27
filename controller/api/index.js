const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const foodRoutes = require('./foodRoutes');
// const drinkRoutes = require('./drinkRoutes');


router.use('/users', userRoutes);
// router.use('/food', foodRoutes);
// router.use('/drink', drinkRoutes);


module.exports = router;
