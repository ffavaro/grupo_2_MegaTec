
const db = require("../database/models");

let controller = {
    index: function (req,res) {
        db.Product.findAll().then(listProduct => {
            res.render('home', {listProduct});
        })
    },
    login: (req,res) =>{
        return res.render("./users/singIn",{errors:  [], old:[]});
    }
}

module.exports = controller;