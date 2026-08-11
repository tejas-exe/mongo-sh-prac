const express = require('express');
const router = express.Router();
const { executeCustomAggregation } = require('../controllers/aggregateController');

router.post('/custom', executeCustomAggregation);

module.exports = router;
