const usersServices = require("../services/usersServices")

const userDB = (req, res, next) => {
    const userInDB = usersServices.findByEmail(req.body.email)
    if (!userInDB){
        return res.render("register", {errors : {email: {msg:"Este mail ya esta registrado, por favor dirigite al login"}}, old: req.body})
    } next()
}

module.exports = userDB 