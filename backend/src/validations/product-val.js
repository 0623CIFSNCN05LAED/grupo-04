const {check} = require("express-validator")

const productValidation = [
    check("name")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:4}).withMessage("El nombre de producto debe tener más de 3 caracteres")
    .bail(),

    check("taste")
    .notEmpty().withMessage("Debe completar este campo"),

    check("weight")
    .notEmpty().withMessage("Debe completar este campo"),

    check("category")
    .notEmpty().withMessage("Debe completar este campo"),

    check("description")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:20}).withMessage("El nombre de producto debe tener más de 20 caracteres"),

    check("age")
    .notEmpty().withMessage("Debe completar este campo"),

    check("price")
    .notEmpty().withMessage("Debe completar este campo")
]

module.exports = productValidation
