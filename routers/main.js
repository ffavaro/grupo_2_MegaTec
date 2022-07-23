const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');
const userMiddleware = require('../middleware/userMiddleware');

router.get('/home', mainController.index);
router.get('/', userMiddleware.verificationLogged ,mainController.login);

module.exports = router;