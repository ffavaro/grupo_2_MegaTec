const express = require('express');
const app = express();

const main = require("./routers/main");
const product = require("./routers/product");
const users = require("./routers/user");

app.use(express.static("./public"));

app.listen(3000, (req, res) => {
    console.log("Server on");
});

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use("/", main);
app.use("/user", users);
app.use("/product", product);