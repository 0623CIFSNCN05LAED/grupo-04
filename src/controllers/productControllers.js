const productServices = require("../services/productServices");

const controller = {
    // Todos los productos
    all: (req, res) => {
        const products = productServices.getAll();
        res.render("inicioprodu", {products});
    },
    // Creación de producto
    create: (req, res) => {
        res.render("productos")
    },
    // Creación - Almacenamiento de datos
    save: (req, res) => {
        console.log(req.body)
        const product = {
            name: req.body.name,
            taste: req.body.taste,
            weight: req.body.weight,
            category: req.body.category,
            image: req.file ? req.file.filename : "default-image.png",
            description: req.body.description,
            age: req.body.age,
            price: Number(req.body.price),
          };
        productServices.createProduct(product);
        res.redirect("/productos")
    },
    // Detalle de un producto particular
    product: (req, res) => {
        const id = req.params.id;
        const producto = productServices.getProduct(id);
        res.render("productDetails", {producto})
    },
    // Capto el producto a editar
    edit: (req, res) => {
        const id = req.params.id;
        const product = productServices.getProduct(id);
        res.render("edicionProductos", { product });
    },
    // Edición de productos - a donde se envía el formulario
    update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        const image = req.file? req.file.filename: productServices.getProduct(id).image;
        product.image = image;
        productServices.updateProduct(id, product);
        res.redirect("/productos");
      },
    // Eliminación de un producto
    delete: (req, res) => {
        const idProd = req.params.id;
        console.log(`deleting product id: ${idProd}`);
        res.redirect("/inicioprodu");
    },
}

module.exports= controller