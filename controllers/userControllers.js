const path = require('path');
const fs = require("fs");
const usersFilePath = path.join(__dirname,"../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales
//validation-result
const{ validationResult } = ('express-validator')
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
let controller = {

    register: function (req, res) {
        res.render('./users/register');
    },
    singIn: function (req, res) {
        res.render('./users/singIn')
    },
    loginProcess: function (req,res) {
    let userFound = users.find(oneUser => oneUser.email === req.body.email);
    if (userFound){
        let comparePassword = bcrypt.compareSync(req.body.password, userFound.password)
    if(comparePassword === true){
        req.session.userLogged = userFound
        delete userFound.password
    return res.redirect('../home')
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
    },
    home: (req,res) => {
        return res.render('home',{
        user:req.session.userLogged
    })}
}

module.exports = controller;