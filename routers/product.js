const express = require('express');
const router = express.Router();
const path = require('path')
const productControllers = require('../controllers/productControllers');
//multer
const multer =require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/product')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

/*Get list product */
router.get('/', productControllers.index);

/*Product detail */
router.get('/detail/:id', productControllers.detail);

/**Product Cart */
router.get('/productCart', productControllers.productCart);

// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo
router.get('/create', productControllers.create);
router.post('/create', uploadFile.single('image'), productControllers.store);

/*Product detail */
router.get('/:id', productControllers.detail);

/*Product edit */
//falta el put y el get
router.get('/edit/:id', productControllers.edit);
router.post('/edit/:id', productControllers.update);

/**Delete  */

router.delete('/delete/:id', productControllers.delete);

module.exports = router;


