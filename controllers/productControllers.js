let controller = {
    index: function (req, res) {
        res.render('./product/productCart')
    },
    detail: function (req, res) {
        res.render('./product/productDetail')
    },
    formProduct: function (req,res) {
        res.render('./product/formularioProducto')
    }
}

module.exports = controller;