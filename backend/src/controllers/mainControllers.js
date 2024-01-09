const path = require("path");
const productServices = require("../services/productServices");

const controller = {
  home: (req, res) => {
    productServices.getAll().then((product)=>{
      res.render("home", {product});
  })
  },  
  detallesDeProducto: (req, res) => {
  res.render("productDetails");
 },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};

module.exports = controller