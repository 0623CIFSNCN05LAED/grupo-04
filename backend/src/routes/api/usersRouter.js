const express = require("express")
const router = express.Router()
const apiUserControllers = require("../../controllers/api/usersControllers")

router.get("/", apiUserControllers.all)
router.get("/:email", apiUserControllers.getUser)
router.post("/", apiUserControllers.saveUser)

module.exports = router