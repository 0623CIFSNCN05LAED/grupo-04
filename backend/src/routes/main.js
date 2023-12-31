const express = require("express");
const router = express.Router()

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);/* 
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register); 
router.get("/productDetails", mainControllers.detallesDeProducto);*/

// Para utilizar un solo punto de ruteo
const productsRouter = require("./products");
const usersRouter = require("./users")
const apiRouter = require("./api/main")
router.use("/", productsRouter);
router.use("/", usersRouter)
router.use("/api", apiRouter) 

module.exports = router;
