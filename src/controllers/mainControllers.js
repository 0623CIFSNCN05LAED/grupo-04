const path = require("path");

const controller = {
  home: (req, res) => {
    res.render("home");
  },
  carrito: (req, res) => {
    res.render("productCart");
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