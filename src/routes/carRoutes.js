const express = require('express');
const router = express.Router();
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  seedCars
} = require('../controllers/carController');

router.route('/')
  .get(getAllCars)
  .post(createCar);

router.post('/seed', seedCars);

router.route('/:id')
  .get(getCarById)
  .put(updateCar)
  .delete(deleteCar);

module.exports = router;
