const db = require("../data/db");

const productServices = {
    getAll: () => {
        db.products.find();
    }
}

module.exports= productServices