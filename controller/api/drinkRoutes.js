const router = require('express').Router();
const { Item, Location } = require('../../models');

// The `/api/drink` endpoint

router.get('/', async (req, res) => {
  // find all drinks
  try {
    const drinkData = await Item.findAll({
      include: [
        {
          model: Location,
        },
      ],
      where: {
        isFood: false
      }
    });
    res.status(200).json(drinkData);
  } catch (err) {
    res.status(500).json(err);
  }

});
