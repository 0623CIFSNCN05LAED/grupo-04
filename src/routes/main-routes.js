const {Router} = require("express");

const mainControllers = require("../controllers/main-controllers");

const router = Router();

router.get("/", mainControllers.home);
router.get("/carrito", mainControllers.carrito);
router.get("/detalles-de-producto", mainControllers.detallesDeProducto);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);

module.exports = router;
