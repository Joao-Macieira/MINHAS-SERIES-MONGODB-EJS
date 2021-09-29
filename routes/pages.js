const express = require('express');
const pagesControllers = require('../controllers/pagesController');

const router = express.Router();

router.get('/', pagesControllers.index);
router.get('/sobre', pagesControllers.about);

module.exports = router;
