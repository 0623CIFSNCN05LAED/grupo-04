const userCheck = (req, res, next) => {
    if (req.session.userData) {
        next();
      } else {
        res.redirect("/usuarios/login");
      }
}

module.exports = userCheck