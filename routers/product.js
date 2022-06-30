const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

/*Get list product */
router.get('/', productControllers.index);

/*Product detail */
router.get('/:id', productControllers.detail);

/*Product create */
router.get('/formularioProducto', productControllers.formProduct);
//falta el post

router.get('/productCart', productControllers.productCart);

/*Product edit */
//falta el put y el get


/*Product delete */
router.delete('/:id', productControllers.delete);

module.exports = router;