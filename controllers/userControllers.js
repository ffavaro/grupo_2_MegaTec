const path = require('path');

let controller = {
    register: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    }
}

module.exports = controller;