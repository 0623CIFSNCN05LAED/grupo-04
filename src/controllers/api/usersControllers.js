const usersServices = require("../../services/usersServices")
const bcrypt = require("bcryptjs")

const controller = {
    all: async (req, res) => {
        const users = await usersServices.getAll()
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl
            },
            data: users
        })
    },
    getUser: async (req, res) => {
        const user = await usersServices.findByEmail(req.params.email)
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl
            },
            data: user
        })
    },
    saveUser: async (req, res) => {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            name: req.body.name,
            dni: Number(req.body.dni),
            home: req.body.home,
            phone_number: Number(req.body.phone_number),
            image: req.file ? req.file.filename : "default-image.png",
        } 
        const users = await usersServices.createUser(user)
        res.json({
            meta: {
                status: 201,
                url: req.originalUrl
            },
            data: users
        })
    },

}

module.exports = controller