const db = require("../database/models");
const bcrypt = require("bcrypt");
const { body, validationResult } = require('express-validator');

let controller = {
  register: function (req, res) {
    res.render("./users/register");
  },
  singIn: function (req, res) {
    res.render("./users/singIn");
  },

  loginProcess: function (req,res) {
    body('email').isEmail()
    body('email').custom(value => {
      return db.User.findOne({where: {
        email: value}, raw: true }).then(user => {
        if (!user) {
          return Promise.reject('E-mail inexistente');
        }
      });
    })

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    db.User.findOne ({
      where: {
        email: req.body.email}, raw: true
      })
    .then(user => { 
      if (user){
        let password = req.body.password;
            if (bcrypt.compareSync(password, user.password)) {
              if (req.body.recordarme == "on") res.cookie("user", user);
              req.session.userLogged = user;
              return res.redirect("profile");
            }
      
            return res.render("./users/singIn", {
              errors: {
                password: {
                  msg: "Constraseña Inválida",
                },
              },
            });
          }
          return res.render("./users/singIn", {
            errors: {
              email: {
                msg: "email no registrado",
              },
            },
          })
        })
      },
  store: function (req, res) {
    let hash = bcrypt.hashSync(req.body.password, 10);

    db.User.create(
      {
      firstname: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      image: req.file.filename,
      type_id: req.body.type
      }
    ).then(() =>{
      res.redirect("/")
    })
  },
  update: (req, res) => {
    db.User.update(
      {
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        image: req.file.filename,
        type_id: req.body.type
      },
      {
        where:{ 
          id : (req.session.userLogged).id
      },
    })
      .then(() => {
        return res.redirect("./users/profile");
      })
      .catch((error) => res.send(error));
  },

  profile: (req, res) => {
    return res.render("./users/profile", { usuario: req.session.userLogged });
  },


};

module.exports = controller;
