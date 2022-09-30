
const db = require("../database/models");

let controller = {
    index: function (req,res) {
        db.Product.findAll().then(listProduct => {
            res.render('home', {listProduct});
        })
    },
    login: (req,res) =>{
        res.render('./users/singIn')
    }
}

module.exports = controller;