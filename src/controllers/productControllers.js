const productServices = require("../services/productServices");

const controller = {
    // Todos los productos
    all: (req, res) => {
        productServices.getAll().then((product)=>{
            res.render("inicioprodu", {product});
        })
    },
    carrito: (req, res) => {
        const id = req.params.id
        productServices.getProduct(id).then((product)=>{
            res.render("productCart", {product});
        })

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
        productServices.createProduct(product).then(()=>{
            res.redirect("/productos")
        });
    },
    // Detalle de un producto particular
    product: (req, res) => {
        const id= req.params.id
        productServices.getProduct(id).then((product)=>{
            res.render("productDetails", {product})
        })
    },
    // Capto el producto a editar
    edit: (req, res) => {
        const id = req.params.id
        productServices.getProduct(id).then((product)=>{
            res.render("edicionProductos", { product });
        })
    },
    // Edición de productos - a donde se envía el formulario
    update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        productServices.updateProduct(id, product).then(()=> {
            res.redirect("/productos");
        })        
      },
    // Eliminación de un producto
    delete: (req, res) => {
        const idProd = req.params.id;
        productServices.deleteProduct(idProd).then(()=>{
            res.redirect("/inicioprodu");
        })        
    }/* ,
    welcome: (req, res) => {
        const data = req.session.userData
        res.render("welcome", {
            username: data.username,
            password: data.password 
        })
    } */
}

module.exports= controller