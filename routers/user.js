const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
//express validator
const {body}= require('express-validator')
const path = require('path')
//multer
const multer =require('multer');
// Middleware
const userMiddleware = require('../middleware/userMiddleware');
const { validateUser } = require('../middleware/userValidator');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/user')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

router.get('/register', userMiddleware.verificationLogged ,userControllers.register);
// Craer la ruta /login al iniciar sesion 
//Login
router.get('/login', userMiddleware.redirectProfile, userControllers.singIn);
router.post('/login', userControllers.loginProcess);
// Vista profile
router.get('/profile', userControllers.profile); 
/*User edit */
router.get('/edit/:id',  userMiddleware.withUser, userControllers.edit);
router.post('/edit/:id', userMiddleware.withUser, uploadFile.single('image'), userControllers.update);

router.post('/new', validateUser , uploadFile.single('avatar'), userControllers.store)

module.exports = router;