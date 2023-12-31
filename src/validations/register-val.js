const { body } = require("express-validator")

const registerValidation = [
    body("username")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:4}).withMessage("El nombre de usuario debe tener más de 3 caracteres")
    .bail(),

    body("email")
    .notEmpty().withMessage("Debe completar este campo")
    .isEmail().withMessage("Debe ingresar un email válido"),

    body("password")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:4}).withMessage("Es seguro que la contraseña sobrepase los 4 caracteres"),

    body("name")
    .notEmpty().withMessage("Debe completar este campo"),

    body("dni")
    .notEmpty().withMessage("Debe completar este campo")
    .isNumeric(),    

    body("home")
    .notEmpty().withMessage("Debe completar este campo"),

    body("phone_number")
    .notEmpty().withMessage("Debe completar este campo")
]

module.exports = registerValidation