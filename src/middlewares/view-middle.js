const viewMiddleware = (req, res, next) => {
    res.locals.logged = false
    if(req.session && req.session.userData){
        res.locals.logged = true
        res.locals.logged = req.session.logged
    }
    next()
}

module.exports = viewMiddleware

// Me permite mostrar ciertas cosas dependiendo de si el usuario esta logueado o no (puede servir para profile y logout y registro y login)