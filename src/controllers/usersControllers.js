const usersServices = require("../services/usersServices");
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")

const controller = {
    register: (req, res) => {
        res.render("register");
    },
    saveUser: (req, res) => {
        const resultValidation = validationResult(req)
        if(resultValidation.errors.length > 0){
            return res.render("register", {
                errors: resultValidation.mapped(),
                old: req.body,
            })
        } else {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
                name: req.body.name,
                dni: Number(req.body.dni),
                home: req.body.home,
                phone_number: Number(req.body.phone_number),
                image: req.file ? req.file.filename : "default-image.png",
            } 
            usersServices.createUser(user).then(()=>{
                res.redirect("/")
            })
        }
        
    },
    login: (req, res) => { 
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        req.session.errors = null
        req.session.oldData = null
        res.render("login", {
        errors: errors ? errors : null,
        oldData: oldData ? oldData : null,
        });
    },
    success: (req, res) => {
        return usersServices.findByEmail(req.body.email).then((user)=>{
            if(user){
                const passwordCheck = bcrypt.compare(req.body.password, user.password)
                if(passwordCheck){
                    delete user.password
                    req.session.userData = user
                    console.log(req.session)

                    if(req.body.checkbox_email){
                        res.cookie("userCookie", req.body.email, {maxAge: (1000 * 60)*60})
                    }
                    return res.redirect("/usuarios")
                } else {
                    return res.render("login", {
                        errors: {
                            incorrect: {msg: "El mail y/o la contraseña son incorrectos"}
                        }
                    })
                } 
            } else {
                return res.render("login", 
                    {errors : 
                        {email: {msg:"Este mail no se encuentra registrado, por favor registrese"}}, old: req.body})
            }
        }) 
    },
    welcome: (req, res) => {
        console.log(req.cookies.userCookie)
        return res.render("welcome", {
            user: req.session.userData
        })
    },
    logout: (req,res) => {
        res.clearCookie("userCookie"),
        req.session.destroy()
        return res.redirect("/")
    }
}

module.exports = controller