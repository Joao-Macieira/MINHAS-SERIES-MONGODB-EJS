const express = require('express');
const seriesControllers = require('../controllers/seriesController');

const router = express.Router();

const Serie = require('../models/serie');

const models = {
  Serie
}

router.get('/', seriesControllers.index.bind(null, models));
router.get('/nova', seriesControllers.storeForm);
router.post('/nova', seriesControllers.storeProcess.bind(null, models));
router.get('/editar/:id', seriesControllers.editForm.bind(null, models));
router.post('/editar/:id', seriesControllers.editProcess.bind(null, models));
router.get('/excluir/:id', seriesControllers.excluir.bind(null, models));

router.get('/info/:id', seriesControllers.info.bind(null, models));
router.post('/info/:id', seriesControllers.addComments.bind(null, models));

module.exports = router;
