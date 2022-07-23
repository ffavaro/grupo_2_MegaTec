const express = require('express');
const router = express.Router();
const path = require('path')
const productControllers = require('../controllers/productControllers');
//express-validation
const {body}=require('express-validator');
const validations = [];
//multer
const multer =require('multer');
// Middleware
const userMiddleware = require('../middleware/userMiddleware');

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
router.get('/', userMiddleware.allAccess, productControllers.index);

/*Product detail */
router.get('/detail/:id', userMiddleware.allAccess, productControllers.detail);

/**Product Cart */
router.get('/productCart', userMiddleware.withUser, productControllers.productCart);

// Creación de productos GET y envío de información POST
// La ruta completa es /product/create, porque en app.js ya está este prefijo
router.get('/create', userMiddleware.withUser, productControllers.create);
router.post('/create', userMiddleware.withUser, uploadFile.single('image'), productControllers.store);

/*Product detail */
router.get('/:id', userMiddleware.allAccess, productControllers.detail);

/*Product edit */
router.get('/edit/:id',  userMiddleware.withUser, productControllers.edit);
router.post('/edit/:id', userMiddleware.withUser, productControllers.update);

/**Delete  */
router.delete('/delete/:id', userMiddleware.withUser, productControllers.delete);

module.exports = router;


