const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/productCart', productControllers.index);
router.get('/productDetail', productControllers.detail);

// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo
router.get('/create',productControllers.create);
router.post('/products',productControllers.store)
module.exports = router;
