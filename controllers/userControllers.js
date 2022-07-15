const path = require("path");
const fs = require("fs");
const bcrypt = require('bcrypt');

const usersFilePath = path.join(
  __dirname,
  "../src/data/users.json"
);
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales

let controller = {
    register: function (req, res) {
        res.render('./users/register');
    },
    store: (req, res) => {
        console.log(req.file);
        let hash =  bcrypt.hashSync(req.body.password, 10);
        let newUser = {
            id: req.body.id,
            firstname: req.body.name,
            lastname: req.body.description,
            email: req.body.email,
            password:hash,
            category: req.body.category,
            image: req.file.filename
          };
          users.push(newUser);
          let jsonProduct = JSON.stringify(users);
          fs.writeFileSync(usersFilePath, jsonProduct); //Reemplaza el archivo JSON anterior por el nuevo producto
          res.redirect('/');
    }
}

module.exports = controller;