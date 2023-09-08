const { Router } = require("express");

const mainControllers = require("../controllers/main-controllers");

const router = Router();

router.get("/", mainControllers.home);
router.get("/productCart", mainControllers.carrito);
router.get("/productDetails", mainControllers.detallesDeProducto);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);

module.exports = router;
