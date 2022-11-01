const router = require('express').Router();
const { Location } = require('../../models');

// The '/api/location' endpoint
// GET ROUTE
router.get('/', async (req, res) => {
  // find all locations
  try {
    const locationData = await Location.findAll({

    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// POST ROUTE
router.post('/', async (req, res) => {
  // Create a new location
  try {
    // Check if location already created
    const allLocations = await Location.findOne({ where: 
      { 
        restaurantName: req.body.restaurantName,
        restaurantCity: req.body.restaurantCity,
      } 
    });
    // If no location, creates new location
    if (allLocations === null) {
      const locationData = await Location.create({
        restaurantName: req.body.restaurantName, 
        restaurantCity: req.body.restaurantCity,
        happyHourTimeStart: req.body.happyHourTimeStart,
        happyHourTimeEnd: req.body.happyHourTimeEnd,
      });
      res.status(200).json(locationData)
    } else {
      // If location already made, the original location is returned
      const locationData = await Location.findOne({ where: 
        { 
          restaurantName: req.body.restaurantName,
          restaurantCity: req.body.restaurantCity,
        } 
      });
      res.status(200).json(locationData)
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;