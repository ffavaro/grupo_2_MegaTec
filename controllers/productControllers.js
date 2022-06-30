
let controller = {
    index: function (req, res) {
        res.render('./product/productCart')
    },
    detail: function (req, res) {
        res.render('./product/productDetail')
    },
    create: function (req,res) {
        res.render('./product/formularioProducto')
    },
    store: function ( req,res) {

            let newProduct = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                category:  req.body.category
            }

            products.push(newProduct);
            let jsonProduct = JSON.stringify(products);
            fs.writeFileSync(productsFilePath, jsonProduct);
    }
}

module.exports = controller;