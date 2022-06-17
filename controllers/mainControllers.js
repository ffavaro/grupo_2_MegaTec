const path = require('path');

let controller = {
    index: function (req,res) {
        res.render('home');
    },
    singIn: function (req, res) {
        res.render('./users/singIn')
    }
}

module.exports = controller;