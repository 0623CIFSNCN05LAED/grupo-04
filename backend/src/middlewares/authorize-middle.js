const authorize = (req, res, next) => {
    const { user } = req.query;
    const usuariosAutorizados = ["azu24", "nadia"];
    if (usuariosAutorizados.includes(user)) {
      return next();
    }
    return res.send("No tienes los privilegios para ingresar");
  }

module.exports = authorize

//pensar como agregarlo para que solo permita acceder a los usuarios elegidos a la creacion, eliminacion y edicion de productos y usuarios

