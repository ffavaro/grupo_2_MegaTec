const {check, validationResult} = require('express-validator');

exports.productValidator = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('El nombre no puede ser vacio')
    .bail()
    .isLength({min: 5})
    .withMessage('Caracteres requeridos 5!')
    .bail(),

    check('description')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('El descripcion no puede ser vacio')
    .bail()
    .isLength({min: 20})
    .withMessage('Caracteres requeridos 20!')
    .bail(),
    check('image')
    .notEmpty().withMessage("la image es requerido")
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