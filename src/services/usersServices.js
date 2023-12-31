const { Users } = require("../database/models");

const usersServices = {
    findByEmail: (user) => {
        return Users.findOne({
            where: {email: user}
       })
    },
    createUser: (body) => {
        return Users.create({
            username: body.username,
            email: body.email,
            password: body.password,
            name: body.name,
            dni: body.dni,
            home: body.home,
            phone_number: body.phone_number,
            image: body.image,
        })
    }
}

module.exports = usersServices