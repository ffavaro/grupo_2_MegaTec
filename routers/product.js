const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');


/*Get list product */
router.get('/', productControllers.index);

/*Product detail */
router.get('/create', productControllers.create);
router.get('/productCart', productControllers.productCart);
router.get('/:id', productControllers.detail);

// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo
router.post('/products', productControllers.store)

/*Product edit */
//falta el put y el get


/*Product delete */



module.exports = router;


