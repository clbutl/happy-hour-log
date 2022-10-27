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
          attributes: ['id','restaurantName','restaurantCity','happyHourTimeStart','happyHourTimeEnd'],
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

router.post('/', async (req, res) => {
  // Create a new drink
  try {
    const drinkData = await Item.create({
      isFood: req.body.isFood, // Should this be set to false?
      name: req.body.name,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      dealType: req.body.dealType,
      dealDay: req.body.dealDay,
      locationId: req.body.locationId,
    });
    res.status(200).json(drinkData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // Delete specific drink
  try {
    const drinkData = await Item.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!drinkData) {
      res.status(404).json({message: 'No drink with that id!' });
      return;
    }
    res.status(200).json(drinkData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
