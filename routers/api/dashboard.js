const express = require("express");
const router = express.Router();
const dashboardControllers = require("../../controllers/api/dashboardApiController");

/* ○ Total de productos*/
router.get("/product", dashboardControllers.getCountAllProduct);
/** ○ Total de usuarios*/
router.get("/users", dashboardControllers.getCountAllUser);
/** ○ Total de categorías*/
router.get("/category", dashboardControllers.getCountAllCategory);
/** ● Panel de detalle de último producto o usuario creado.*/
router.get("/lastProduct", dashboardControllers.getLastProduct);
/** ● Panel de detalle de último producto o usuario creado.*/
router.get("/lastUser", dashboardControllers.getLastUser);
/* ● Panel de categorías con el total de productos de cada una.*/
router.get("/listCategory", dashboardControllers.getAllCategorWithProduct);
/* ● Panel con el listado de productos. */
router.get("/listProduct", dashboardControllers.getAllProduct);

module.exports = router;
