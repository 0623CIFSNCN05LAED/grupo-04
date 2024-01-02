const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  
   }, 
  })

const uploadFile = multer({ storage });

const usersControllers = require("../controllers/usersControllers");

const guestMiddleware = require("../middlewares/guest-middle")

const registerValidation = require("../validations/register-val") 
const registerMiddleware = require("../middlewares/register-middle")
const userInDB = require("../middlewares/user-DB")
 
const loginValidation = require("../validations/login-val")
const loginMiddleware = require("../middlewares/login-middle")
const authMiddleware = require("../middlewares/authorize-middle");

router.get("/usuarios/login", guestMiddleware, usersControllers.login)
router.post("/usuarios/login",  loginValidation, loginMiddleware, usersControllers.success) 

router.get("/usuarios/registro", guestMiddleware, usersControllers.register)
router.post("/usuarios/registro",  uploadFile.single("image"), registerValidation, registerMiddleware, userInDB, usersControllers.saveUser);

router.get("/usuarios", usersControllers.welcome)

/* router.get("/usuarios/admin", authMiddleware, (req, res) => {
   res.send("Hola Admin");
 }); */

router.get("/usuarios/logout", usersControllers.logout)

module.exports = router