const {Users}= require("../database/models")

const viewMiddleware = (req, res, next) => {
    res.locals.logged = false

    const emailCookie = req.cookies.userCookie
    const userFromCookie = Users.findOne({where: {email: req.cookies.userCookie || null}})
    console.log(req.cookies.userCookie)

    if(!userFromCookie == null){
       req.session.userData= userFromCookie 
    }
        
    if(req.session && req.session.userData){
        res.locals.logged = true
        res.locals.userData = req.session.userData
    }
    next()
}

module.exports = viewMiddleware

// Me permite mostrar ciertas cosas dependiendo de si el usuario esta logueado o no (puede servir para profile y logout y registro y login)