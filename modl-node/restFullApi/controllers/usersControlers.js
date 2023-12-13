const userModel = require('../models/userModels')

// let USERS = [
//     { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
//     { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
//     { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' }
// ];

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
const postUser = async (req, res) => {

    try {
        const { name, email } = req.body

        const newUser = {
            'name': name,
            'email': email
        }

        const result = await userModel.create({
            'name': name,
            'email': email
        })

        console.log(result)
        
        if (result.deletedCount === 0) {
            res.status(404).send("No se encontró el usuario");
        } else {
            res.send("Usuario eliminado correctamente");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al intentar eliminar el usuario");
    }



    // USERS.push(newUser)

    // res.send(user)
}

// Para borrar algo.
const delUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        const result = await userModel.deleteOne({ '_id': userId });
        console.log(result)
        if (result.deletedCount === 0) {
            res.status(404).send("No se encontró el usuario");
        } else {
            res.send("Usuario eliminado correctamente");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al intentar eliminar el usuario");
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateById,
    postUser,
    delUserById
};