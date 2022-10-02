const express = require('express');
const methodOverride =  require('method-override');
const session = require('express-session');
// Pasar poder usar los métodos PUT y DELETE
const app = express();  
//Routers
const main = require("./routers/main");
const product = require("./routers/product");
const users = require("./routers/user");
var cookieParser = require('cookie-parser');

const usersApi = require("./routers/api/userApi");
const productApi = require("./routers/api/productApi");
const dashboard = require("./routers/api/dashboard");
const cors = require("cors");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./public"));
app.use(cors())

// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride("_method"));

//Cookies
app.use(cookieParser());
//Session
app.use(session(
    {
        secret:'Shhh',
        resave: false,
        saveUninitialized: false
    }
));
//Views
app.set('view engine', 'ejs');
app.set('views', './src/views');

//Routing
app.use("/", main);
app.use("/user", users);
app.use("/product", product);
app.use("/api/users", usersApi);
app.use("/api/product", productApi);
app.use("/api/dashboard", dashboard);

app.use((req,res, next) =>{
    res.status(404).render("not-found")
})

//Listen port
app.listen(3000, (req, res) => {
    console.log("Server on");
});

