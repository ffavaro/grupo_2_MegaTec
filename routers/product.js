const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');


/*Get list product */
router.get('/', productControllers.index);

/*Product detail */
router.get('/:id', productControllers.detail);

router.get('/productCart', productControllers.productCart);

// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo
router.get('/create',productControllers.create);
router.post('/products',productControllers.store)

/*Product edit */
//falta el put y el get


/*Product delete */



module.exports = router;


