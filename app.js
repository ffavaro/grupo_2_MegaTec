const express = require('express');
const methodOverride =  require('method-override'); 
// Pasar poder usar los métodos PUT y DELETE
const app = express();

//Routers
const main = require("./routers/main");
const product = require("./routers/product");
const users = require("./routers/user");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./public"));

// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride("_method"));

//Views
app.set('view engine', 'ejs');
app.set('views', './src/views');

//Routing
app.use("/", main);
app.use("/user", users);
app.use("/product", product);
app.use((req,res, next) =>{
    res.status(404).render("not-found")
})

//Listen port
app.listen(3000, (req, res) => {
    console.log("Server on");
});

