const path = require('path');
const fs = require("fs");
const usersFilePath = path.join(__dirname,"../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales
//validation-result
const{ validationResult } = ('express-validator')
const bcrypt = require('bcrypt');


let controller = {

    register: function (req, res) {
        res.render('./users/register');
    },
    singIn: function (req, res) {
        res.render('./users/singIn')
    },
    // login: function (req,res) {
    //  let userFound = users.find(oneUser => oneUser.email=== req.body);
    //     res.send(userFound)
    // },
    loginProcess: function (req,res) {
    let userFound = users.find(oneUser => oneUser.email === req.body.email);
    if (userFound){
    if(userFound.password === req.body.password){
        res.send('puedes ingresar')
    }
    }
    return res.render('./users/singIn',{
        errors: {
            email:{
                msg: 'email no registrado'
            }
        }
    });
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