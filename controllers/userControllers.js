const db = require("../database/models");
const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator' );

let controller = {
  register: function (req, res) {
    res.render("./users/register", { errors: [], old: []});
  },
  singIn: function (req, res) {
    res.render("./users/singIn");
  },
  loginProcess: function (req, res) {
    const resultValidation = validationResult(req);
  
    if (resultValidation.errors.length > 0) {
      return res.render("./users/singIn",{errors:  resultValidation.mapped(), old:req.body});
    }
    
    db.User.findOne({
      where: {
        email: req.body.email,
      },
      raw: true,
    }).then((user) => {
      if (user) {
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
      });
    });
  },
  store: function (req, res) {
    const resultValidation = validationResult(req);
  
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register",{errors:  resultValidation.mapped(), old:req.body});
    }

    let hash = bcrypt.hashSync(req.body.password, 10);

    db.User.create({
      firstname: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      image: req.file.filename,
      type_id: req.body.type,
    }).then(() => {
      return res.redirect("/");
    });
  },
  edit: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      res.render("./users/edit", { user });
    });
  },
  update: (req, res) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    db.User.update(
      {
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        image: req.file.filename,
        type_id: req.body.type,
      },
      {
        where: {
          id: req.session.userLogged.id,
        },
      }
    )
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
