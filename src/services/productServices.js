const db = require("../data/db");

const productServices = {
    getAll: () => {
        const products = db.products.findProducts();
        return products
    },
    getProduct: (id) => {
        const product= db.products.findById(id);
        return product
    },
    createProduct: (product) => {
        const creation = db.products.create(product);
        return creation
    },
    updateProduct: (id, product) => {
        const updateProd = db.products.update(id, product);
        return updateProd
    },
    deleteProduct: (id) => {
        const deleteProd = db.products.delete(id);
        return deleteProd
    },
}

module.exports= productServices