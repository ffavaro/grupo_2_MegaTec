const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/productCart', productControllers.index);
router.get('/productDetail', productControllers.detail);

module.exports = router;