const {validationResult} = require("express-validator")

const productMiddleware = (req, res, next) => {
    const errors = validationResult(req); 
        if(!errors.isEmpty()){
            res.render("productos", {errors : errors.mapped(), old: req.body})
        } else {
            next()
        }
    }

module.exports = productMiddleware