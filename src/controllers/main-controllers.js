const path = require("path");

module.exports={
    home : (req, res) => {
        res.render("home");
    },
    carrito : (req,res)=>{
        res.render("productCart")
    },
    detallesDeProducto : (req,res)=>{
        res.render("productDetails")
    },
    login : (req,res)=>{
        res.render("login")
    }
}