const {Products} = require("../database/models");

const productServices = {
    getAll: () => {
        return Products.findAll();
    }, 
    getProduct: (id) => {
        return Products.findByPk(id).then((product)=>({
            id: product.id,
            name: product.name,
            taste: product.taste,
            weight: product.weight,
            brand: product.brand,
            image: product.image,
            description: product.description,
            age: product.age,
            price: product.price,   
        }))
    },
    getProductAndCount: ({
        pageSize, offset
    }) => {
      return Products.findAndCountAll({
        limit: pageSize,
        offset: offset
      })  
    },
    createProduct: (body) => {
        return Products.create({
            id: body.id,
            name: body.name,
            taste: body.taste,
            weight: body.weight,
            brand: body.brand,
            image: body.image,
            description: body.description,
            age: body.age,
            price: body.price,
            id_user: body.id_user,
        })
    },
    updateProduct: (id, body) => {
        return Products.update({
            id: body.id,
            name: body.name,
            taste: body.taste,
            weight: body.weight,
            brand: body.brand,
            image: body.image,
            description: body.description,
            age: body.age,
            price: body.price,
            id_user: body.id_user,
        },{
            where:{ id : id }
        })
    },
    deleteProduct: (id) => {
        return Products.destroy({
            where:{ id : id }
        })
    },
}

module.exports= productServices