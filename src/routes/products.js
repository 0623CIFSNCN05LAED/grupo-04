const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const uploadFile = multer({storage});

const productsControllers = require("../controllers/productControllers");

const check = require("../middlewares/user-Check")
const productValidation = require("../validations/product-val")
const productMiddleware = require("../middlewares/product-middle")

// Todos los productos
router.get("/productos", productsControllers.all)
// Carrito/Tienda
router.get("/productCart", productsControllers.carrito);
// Creación de un producto
router.get("/productos/crear/", check, productsControllers.create);
router.post("/productos", uploadFile.single("image"), productValidation, productMiddleware, productsControllers.save); 
// Detalle de un producto en particular
router.get("/productos/:id", productsControllers.product)
// Edición de UN producto
router.get("/productos/editar/:id", check, productsControllers.edit)
router.put("/productos/:id", productsControllers.update)
// Eliminar un producto
router.get("/productos/delete/:id", check, productsControllers.delete)

module.exports= router;
