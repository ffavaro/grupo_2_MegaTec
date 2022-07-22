const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
//express validator
const {body}= require('express-validator')
const validations =[
    body('email').notEmpty().withMessage('Ingresa tú correo electrónico').bail().isEmail().withMessage('Correo eléctronico no válido'),
    body('password').notEmpty().withMessage('Ingresa tú contraseña')
];


router.get('/register', userControllers.register);
// Craer la ruta /login al iniciar sesion 
//Login
router.get('/login',userControllers.singIn);
router.post('/login',userControllers.loginProcess);

module.exports = router;