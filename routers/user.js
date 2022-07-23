const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
//express validator
const {body}= require('express-validator')
const validations =[
    body('email').notEmpty().withMessage('Ingresa tú correo electrónico').bail().isEmail().withMessage('Correo eléctronico no válido'),
    body('password').notEmpty().withMessage('Ingresa tú contraseña')
];

//Login
router.get('/login',userControllers.singIn);
router.post('/login',userControllers.loginProcess);
router.get('/home', userControllers.home)
const path = require('path')
//multer
const multer =require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/user')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

router.get('/register', userControllers.register);
router.post('/new', uploadFile.single('avatar'), userControllers.store)
module.exports = router;