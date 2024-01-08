const {validationResult} = require("express-validator")

const loginMiddleware = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        return res.redirect("/usuarios/login");
      } else {
        next();
      }
}

module.exports = loginMiddleware