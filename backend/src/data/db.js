const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const db = {
  products: {
    findProducts: function() {
      const productsFilePath = path.join(__dirname, "../data/product.json");
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    saveProducts: function (products) {
      const productsFilePath = path.join(__dirname, "../data/product.json");
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    },
    findById: function(id) {
      const product = this.findProducts().find((product) => product.id == id);
      return product;
    },
    create: function(product){
      console.log(`Creating product ${product.name}`);
      const products = this.findProducts();
      const newProduct = {
        id: uuidv4(),
        ...product,
      };
      products.push(newProduct);
      this.saveProducts(products);
    },
    update: function(id, product) {
      console.log(`Updating product ${product.name}`);
      const products = this.findProducts();
      const productById = products.find((product) => product.id == id);
      Object.assign(productById, product); 
      this.saveProducts(products);
      return product
    },
    delete: function (id) {
      console.log(`Deleting product with id ${id}`);
      const products = this.findProducts();
      const productosAGuardar = products.filter((product) => product.id !== id);
      this.saveProducts(productosAGuardar);
    },
  },
  users: {
    findUser: function() {
      const usersFilePath = path.join(__dirname, "../data/usuarios.json");
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      return users;
    },
    saveUser: function (users) {
      const usersFilePath = path.join(__dirname, "../data/usuarios.json");
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    },
    findUserById: function(id) {
      const user = this.findUser().find((user) => user.id == id);
      return user
    },
    findByField: function(field, text){
      const user = this.findUser().find((user) => user[field] === text);
      return user
    },
    create: function(user){
      console.log(`Creating user ${user.username}`);
      const users = this.findUser();
      const newUser = {
        id: uuidv4(),
        ...user,
      };
      users.push(newUser);
      this.saveUser(users);
    },

    delete: function (id) {
      console.log(`Deleting user with id ${id}`);
      const users = this.findUser();
      const usersToSave = users.filter((user) => user.id !== id);
      this.saveProducts(usersToSave);
    },
  }
}

module.exports = db