const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

router.get('/', homeController.index);
router.post('/', homeController.capturePost);

router.get('/contato', contatoController.index);

module.exports = router;
