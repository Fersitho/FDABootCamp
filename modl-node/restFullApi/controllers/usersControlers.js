const userModel = require('../models/userModels')

let USERS = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' }
];

// para obtener datos
const getUsers = async (req, res) => {

    const users = await userModel.find()

    res.send(users);
}

// para obtener datos concretos
const getUserById = async (req, res) => {
    const userId = req.params.id
    // const user = await userModel.find({'_id': userId})
    const user = await userModel.findById(userId)
    res.send(user)
}

// para actualizar algo que existe usamos el patch!!!.
const updateById = (req, res) => {
    const userId = parseInt(req.params.id)

    const user = USERS.find(user => user.id == userId)

    const { name, email } = req.body
    if (!user) {
        res.send("No existe el usuario")

    } else {

        if (name) {
            user.name = name
        }

        if (email) {
            user.email = email
        }

        res.send(user)

    }
}

// Para crear un dato nuevo
const postUser = (req, res) => {
    let newIndex = USERS.length + 1
    const { name, email } = req.body

    const newUser = {
        id: newIndex,
        name: !name ? `Usuario ${newIndex}` : name,
        email: !email ? `usuario${newIndex}@example.com` : email
    }
    
    USERS.push(newUser)

    res.send(newUser)
}

// Para borrar algo.
const delUserById = (req, res) => {
    const userId = parseInt(req.params.id)
    const userFilter = USERS.filter(user => user.id !== userId)

    if (userFilter.length === USERS.length) {
        res.send("No existe el usuario")
    } else {
        USERS = userFilter
        res.send(USERS)
    }
}

module.exports = {
    getUsers, 
    getUserById,
    updateById,
    postUser,
    delUserById
};