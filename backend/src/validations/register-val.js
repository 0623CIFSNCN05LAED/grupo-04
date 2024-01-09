const { check } = require("express-validator")

const registerValidation = [
    check("username")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:4}).withMessage("El nombre de usuario debe tener más de 3 caracteres")
    .bail(),

    check("email")
    .notEmpty().withMessage("Debe completar este campo")
    .isEmail().withMessage("Debe ingresar un email válido"),

    check("password")
    .notEmpty().withMessage("Debe completar este campo")
    .isLength({min:4}).withMessage("Es seguro que la contraseña sobrepase los 4 caracteres"),

    check("passwordconf")
    .notEmpty().withMessage("Debe completar este campo").trim()
    .custom((value, { req }) => {
        const { password } = req.body;
        if (value !== password) {
          throw new Error("La contraseña debe ser igual en ambos campos");
        }
        return true;
    }),

    check("name")
    .notEmpty().withMessage("Debe completar este campo"),

    check("dni")
    .notEmpty().withMessage("Debe completar este campo")
    .isNumeric(),    

    check("home")
    .notEmpty().withMessage("Debe completar este campo"),

    check("phone_number")
    .notEmpty().withMessage("Debe completar este campo")
]

module.exports = registerValidation

/* const file = req.file
        const extensions = [".jpg", ".png", ".jpeg", ".gif"]
        
        if(!file){
            throw new Error("Tiene que ser una imagen válida")
        } else {
            const fileExtensions = path.extname(file.originalname)
            if(!extensions.includes(fileExtensions)) {
                throw new Error("Las extensiones permitidas son JPG, JPEG, PNG y GIF")
            }
        } */