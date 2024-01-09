const authorize = (req, res, next) => {
    const user = req.session.userData;
    console.log(user)
    const usuariosAutorizados = ["azu@gmail.com"];
    if (!usuariosAutorizados.includes(user.email)) {
      return res.render("home");
    }
    return next();
  }

module.exports = authorize

//pensar como agregarlo para que solo permita acceder a los usuarios elegidos a la creacion, eliminacion y edicion de productos y usuarios

