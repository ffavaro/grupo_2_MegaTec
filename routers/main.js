const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.singIn);
router.get('/home', mainController.index);

module.exports = router;