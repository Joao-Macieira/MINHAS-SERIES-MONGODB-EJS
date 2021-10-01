const express = require('express');
const seriesControllers = require('../controllers/seriesController');

const router = express.Router();

router.get('/', seriesControllers.index);
router.get('/nova', seriesControllers.store);

module.exports = router;
