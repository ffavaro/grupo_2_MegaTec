const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get('/register', userControllers.register);

module.exports = router;