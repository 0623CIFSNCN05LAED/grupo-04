const {validationResult} = require("express-validator")

const registerMiddleware = (req, res, next) => {
    const errors = validationResult(req); 
        if(!errors.isEmpty()){
            res.render("register", {errors : errors.mapped(), old: req.body})
        } else {
            next()
        }
    }

module.exports = registerMiddleware
