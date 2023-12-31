const express = require("express");
const router = express.Router()

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);
router.get("/productCart", mainControllers.carrito);
router.get("/productDetails", mainControllers.detallesDeProducto);

// Para utilizar un solo punto de ruteo
const productsRouter = require("./products");
const usersRouter = require("./users")
router.use("/", productsRouter);
router.use("/", usersRouter)

module.exports = router;
