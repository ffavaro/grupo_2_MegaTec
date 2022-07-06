const express = require('express');
const router = express.Router();
const path = require('path')
const productControllers = require('../controllers/productControllers');
const multer =require('multer');
const multerDiskStorage = multer.diskStorage({
    destination: function(req,file,callback){
        let folder = path.join(__dirname,'../public/images');
        callback(null,folder)
    },
    filename : function(req,file,callback){
        let imagenName = Date.now() + path.extname(file.originalname);
        callback;(null,imagenName);
    }
})
const uploadFile = multer({ storage: multerDiskStorage })

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


module.exports = router;


