const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/productCart', productControllers.index);
router.get('/productDetail', productControllers.detail);
router.get('/formularioProducto', productControllers.formProduct);

module.exports = router;