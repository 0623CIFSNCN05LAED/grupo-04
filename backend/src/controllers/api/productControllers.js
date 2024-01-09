const productServices = require("../../services/productServices")

const pageSize = 6

const controller = {
    // Todos los productos
    all: async (req, res) => {
        const page = Number(req.query.page) || 1
        const offset = (page - 1) * pageSize 
        const {count, rows} = await productServices.getProductAndCount({
            pageSize, offset
        })
        res.json({
            meta: {
                status: 200,
                total: count,
                url: req.originalUrl
            },
            data: rows
        })
    },
    product: async (req, res) => {
        const id= req.params.id
        const productId = await productServices.getProduct(id)
       res.json({
        meta : {
            status: 200,
            url : req.originalUrl
        }, 
        data: productId
       })
    }
}

module.exports = controller