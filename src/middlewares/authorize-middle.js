const authorize = (req, res, next) => {
    const { user } = req.query;
    const usuariosAutorizados = ["azu24", "Nadia"];
    if (usuariosAutorizados.includes(user)) {
      return next();
    }
    return res.redirect("/usuarios/login");
  }

module.exports = authorize

//pensar como agregarlo para que solo permita acceder a los usuarios elegidos a la creacion, eliminacion y edicion de productos y usuarios

