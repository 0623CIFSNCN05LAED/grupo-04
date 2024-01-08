const express = require("express");
const router = express.Router()

const apiProductsRouter = require("./productsRouter")
const apiUsersRouter = require("./usersRouter")

router.use("/productos", apiProductsRouter)
router.use("/usuarios", apiUsersRouter)

module.exports = router; 