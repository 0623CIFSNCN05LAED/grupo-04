const guestMiddleware = (req, res, next) => {
    if(req.session.userData){
        return res.redirect("/")
    } next()
}

module.exports = guestMiddleware