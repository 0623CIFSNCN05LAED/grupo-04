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
const check= require("../middlewares/user-Check")

// Todos los productos
router.get("/productos", check, productsControllers.all)
// Creación de un producto
router.get("/productos/crear/", productsControllers.create);
router.post("/productos", uploadFile.single("image"),productsControllers.save); 
// Detalle de un producto en particular
router.get("/productos/:id", productsControllers.product)
// Edición de UN producto
router.get("/productos/editar/:id", productsControllers.edit)
router.put("/productos/:id", productsControllers.update)
// Eliminar un producto
router.delete("/productos/:id",productsControllers.delete)

module.exports= router;
