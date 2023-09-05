const path = require("path");

module.exports={
    home : (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"));
    },
    carrito : (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/productCart.html"))
    },
    detallesDeProducto : (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/productDetails.html"))
    },
    login : (req,res)=>{
        res.sendFile(path.join(__dirname, "../views/login.html"))
    }
}