const router = require('express').Router();
const { Item, Location } = require('../../models');

// The `/api/drink` endpoint

router.get('/', async (req, res) => {
  // find all drinks
  try {
    const foodData = await Item.findAll({
      include: [
        {
          model: Location,
        },
      ],
      where: {
        isFood: true
      }
    });
    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
