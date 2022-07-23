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

const validations =[
    body('email').notEmpty().withMessage('Ingresa tú correo electrónico').bail().isEmail().withMessage('Correo eléctronico no válido'),
    body('password').notEmpty().withMessage('Ingresa tú contraseña')
];

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/users')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

router.get('/register', userMiddleware.redirectProfile, userControllers.register);
// Craer la ruta /login al iniciar sesion 
//Login
router.get('/login', userMiddleware.verificationLogged, userControllers.singIn);
router.post('/login', userMiddleware.withUser, userControllers.loginProcess);

router.post('/new', uploadFile.single('avatar'), userControllers.store)

module.exports = router;