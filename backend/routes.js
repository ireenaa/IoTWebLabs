const express = require('express');
const router = express.Router();
const {getAllCars, getCarById} = require('./controller');

router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);

module.exports = router;

