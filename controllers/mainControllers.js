const path = require('path');

let controller = {
    index: function (req,res) {
        console.log(__dirname);
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },
    singIn: function (req, res) {
        console.log(__dirname);
        res.sendFile(path.resolve(__dirname, '../views/singIn.html'))
    }
}

module.exports = controller;