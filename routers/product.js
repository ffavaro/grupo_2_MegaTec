const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');


/*Get list product */
router.get('/', productControllers.index);

/*Product detail */
router.post('/creacion',function(req,res){
   res.send('esto es un post') 
})

router.post('/products', productControllers.store)
router.get('/create', productControllers.create);
router.get('/:id', productControllers.detail);

router.get('/productCart', productControllers.productCart);



// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo

/*Product edit */
//falta el put y el get

/*Product delete */
router.delete('/delete/:id', productControllers.delete);

module.exports = router;


