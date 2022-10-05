const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
//express validator
const { body } = require('express-validator');
const path = require('path')
//multer
const multer =require('multer');
// Middleware
const userMiddleware = require('../middleware/userMiddleware');
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/user')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

const validateRegister = [
	body('name')
	.notEmpty().withMessage('Debes completar el nombre').bail()
	.isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),

	body('lastname')
	.notEmpty().withMessage('Debes completar el apellido').bail()
	.isLength({ min: 2 }).withMessage('El apellido debe ser más largo'),

	body('email')
	.notEmpty().withMessage('Debes completar el email').bail()
	.isEmail().withMessage('Debes completar un email válido'),

	body('password')
	.notEmpty().withMessage('Debes completar la contraseña').bail()
	.isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),
	
	body('avatar')
	.custom((value, {req}) =>{
		let file = req.file;
		let acceptedExtension = ['.jpg', '.jpeg', '.png', '.gif'];
		if (!file){
			throw new Error("Tienes que subir una imagen")
		}
		let fileExtension = path.extname(file.originalname);

		if (!acceptedExtension.includes(fileExtension)){
			throw new Error("Extensiones Validas: .JPG, .JPEG, .PNG, .GIF")
		}

		return true;
	})
]

const validateLogin = [
	body('email')
	.notEmpty().withMessage('Debes completar el email').bail(),

	body('password')
	.notEmpty().withMessage('Debes completar la contraseña').bail(),
]


router.get('/register', userMiddleware.verificationLogged ,userControllers.register);
// Craer la ruta /login al iniciar sesion 
//Login
router.get('/login', userMiddleware.redirectProfile, userControllers.singIn);
router.post('/login',validateLogin, userControllers.loginProcess);
// Vista profile
router.get('/profile', userControllers.profile); 
/*User edit */
router.get('/edit/:id',  userMiddleware.withUser, userControllers.edit);
router.post('/edit/:id', userMiddleware.withUser, uploadFile.single('image'), userControllers.update);

router.post('/register',  uploadFile.single('avatar'), validateRegister ,userControllers.store)

module.exports = router;