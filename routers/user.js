const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

const path = require('path')
//multer
const multer =require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images/users')
	},
	filename: (req, file, cb) =>{
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

const uploadFile = multer({ storage: storage })

router.get('/register', userControllers.register);
router.post('/new', uploadFile.single('avatar'), userControllers.store)
module.exports = router;