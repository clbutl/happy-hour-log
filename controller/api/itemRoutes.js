const router = require('express').Router();
const { Item, Location } = require('../../models');



router.get('/', async (req, res) => {
  // find all drinks
  try {
    const itemData = await Item.findAll({
      include: [
        {
          model: Location,
        },
      ],
      
    });
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }

});

//GET  item by id
router.get('/:id', async (req, res) => {
    // find all drinks
    try {
      const itemData = await Item.findByPk(req.params.id, {
        include: [
          {
            model: Location,
          },
        ],
       
      });
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });
  

// //CREATE item
router.post('/', async (req, res) => {
    try {
      const itemData = await Item.create(req.body);

      res.status(200).json(itemData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
  //UPDATE item
  router.put('/:id', async(req, res) => {
   try{
    const itemData = await Item.update(req.body, {
      where: {
    
        id: req.params.id
      },
    });
    res.status(200).json(itemData);
   } catch (err) {
    res.status(400).json(err);
   }
    });


  //DELETE item
  router.delete('/:id', async (req, res) => {
    try {
      const itemData = await Item.destroy({
        where: {
          isFood: true,
          id: req.params.id,
        },
      });
  
      if (!foodData) {
        res.status(404).json({ message: 'No item found with this id!' });
        return;
      }
  
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
