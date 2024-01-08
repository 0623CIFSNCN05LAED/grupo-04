const { check } = require("express-validator")

const validation = [
    check("email")
    .notEmpty().withMessage("Completar este campo")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .trim(),
    check("password")
    .isLength({min:4})
    .withMessage("Debe contener al menos 4 caracteres")
];

module.exports= validation