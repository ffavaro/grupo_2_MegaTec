const express = require('express');
const router = express.Router();
const productControllers = require('../../controllers/api/productApiController');


/*Get list product 

● api/products/
○ Deberá devolver un objeto literal con la siguiente estructura:
■ count → cantidad total de productos en la base.
■ countByCategory → objeto literal con una propiedad por categoría
con el total de productos.

■ products → array con la colección de productos, cada uno con:
● id
● name
● description
● un array con principal relación de uno a muchos (ej:
categories).
● detail → URL para obtener el detalle.
*/
router.get('/', productControllers.getAll);

/*Product detail 

● api/products/:id
○ Deberá devolver un objeto literal con la siguiente estructura:
■ una propiedad por cada campo en base.
■ un array por cada relación de uno a muchos (categories, colors,
sizes, etc).
■ Una URL para la imagen del producto (para mostrar la imagen).*/
router.get('/:id', productControllers.getById);

router.get('/image/:id', productControllers.getImageById);

module.exports = router;


