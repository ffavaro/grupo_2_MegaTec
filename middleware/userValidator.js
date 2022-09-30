const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('El nombre no puede ser vacio')
    .bail()
    .isLength({min: 2})
    .withMessage('Caracteres requeridos 2!')
    .bail(),

    check('lastname')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('El nombre no puede ser vacio')
    .bail()
    .isLength({min: 2})
    .withMessage('Caracteres requeridos 2!')
    .bail(),

    check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Direccion de email invalida!')
    .bail(),
    check('password')
    .trim()
    .not()
    .isLength({min: 8})
    .isEmpty()
    .withMessage('Password invalida!')
    .bail(),
    check('avatar')
    .notEmpty().withMessage("El avatar es requerido")
    .custom({
        isImage: function(value, filename) {

            var extension = (path.extname(filename)).toLowerCase();
            switch (extension) {
                case '.jpg':
                    return '.jpg';
                case '.jpeg':
                    return '.jpeg';
                case  '.png':
                    return '.png';
                case  '.gif':
                    return '.gif';
                default:
                    return false;
            }
        }
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];