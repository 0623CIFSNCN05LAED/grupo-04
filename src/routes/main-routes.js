const {Router} = require("express");

const mainController = require("../controllers/main-controllers");

const router = Router();

router.get("/", mainController.home);
router.get("/carrito", mainController.carrito);
router.get("/detalles-de-producto", mainController.detallesDeProducto);
router.get("/login", mainController.login);

module.exports= router;
