const express = require('express');
const router = express.Router();
const userControllers = require('../../controllers/api/userApiController');

/**Get list all */
router.get('/', userControllers.getAll);
/**Get detail by id */
router.get('/:id', userControllers.getById);
/**Get avatar Faltar terminar */
router.get('/avatar/:id', userControllers.getAvatarById);

module.exports = router;