const express = require("express")
const router = express.Router()
const apiProductControllers = require("../../controllers/api/productControllers")

router.get("/", apiProductControllers.all)
router.get("/:id", apiProductControllers.product)

module.exports = router