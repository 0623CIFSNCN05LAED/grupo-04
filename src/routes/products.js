const express = require("express");
const router = express.Router();

const productsControllers = require("../controllers/productControllers");

// Todos los productos
router.get("/productos", productsControllers.all)
// Creación de un producto
router.get("/productos/crear/", productsControllers.create);
router.post("/productos/crear/", productsControllers.save); 


module.exports= router;
