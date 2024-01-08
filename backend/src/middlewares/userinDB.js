const usersServices = require("../services/usersServices")

const userDB = (req, res, next) => {
    const userInDB = usersServices.findByEmail(req.body.email)
    if (!userInDB){
        return res.render("login", {errors : {email: {msg:"Este mail no se encuentra registrado, por favor registrese"}}, old: req.body})
    } next()
}

module.exports = userDB 