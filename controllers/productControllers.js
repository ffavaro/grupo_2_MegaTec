const path = require('path');

let controller = {
    index: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    },
    detail: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    }
}

module.exports = controller;