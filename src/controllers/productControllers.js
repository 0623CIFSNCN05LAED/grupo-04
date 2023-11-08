const productServices = require("../services/productServices");

const controller = {
    // Todos los productos
    all: (req, res) => {
        const productAll = productServices.getAll();
        res.render("inicioprodu", {productAll})
    },
    // Creacion de producto
    create: (req, res) => {

        res.render("productos")
    },
    // Creacion - Almacenamiento de datos
    save: (req, res) => {
        const prod = req.body;
        console.log(prod);
        res.redirect("/productos")
    },
    
}

module.exports= controller