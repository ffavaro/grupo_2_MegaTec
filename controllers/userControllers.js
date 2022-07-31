const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, "../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales

const bcrypt = require("bcrypt");

let controller = {
  register: function (req, res) {
    res.render("./users/register");
  },
  singIn: function (req, res) {
    res.render("./users/singIn");
  },
   loginProcess: async function (req, res) {
    let userFound = users.find((oneUser) => oneUser.email === req.body.email);
    
    if (userFound) {
      let password = req.body.password;

      if ( bcrypt.compareSync(password,userFound.password)) 
      {
        if (req.body.recordarme == "on") res.cookie("user", userFound);
            req.session.userLogged = userFound;
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
  },
  store: (req, res) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    let newUser = {
      id: req.body.id,
      firstname: req.body.name,
      lastname: req.body.description,
      email: req.body.email,
      password: hash,
      category: req.body.category,
      image: req.file.filename,
    };
    users.push(newUser);
    let jsonProduct = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, jsonProduct); //Reemplaza el archivo JSON anterior por el nuevo producto
    res.redirect("/");
  },
  profile: (req, res) => {
    return res.render("./users/profile", { usuario: req.session.userLogged });
  },
};

module.exports = controller;
