const path = require('path');
const fs = require("fs");
const usersFilePath = path.join(__dirname,"../src/data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); // Convierte el JSON en un array de objetos literales
//validation-result
const{ validationResult } = ('express-validator')

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
    }
    }

module.exports = controller;