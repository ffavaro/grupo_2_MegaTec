let controller = {
    index: function (req, res) {
        res.render('./product/productCart')
    },
    detail: function (req, res) {
        res.render('./product/productDetail')
    }
}

module.exports = controller;