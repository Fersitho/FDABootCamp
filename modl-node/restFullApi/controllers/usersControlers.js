const router = require('express').Router()

let USERS = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' }
];

// para obtener datos
router.get("/", (req, res) => {
    res.send(USERS);
})

// para obtener datos concretos
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const user = USERS.find(user => user.id == userId)
    res.send(user)
})

// para actualizar algo que existe.
router.patch("/:id", (req, res) => {

    const userId = parseInt(req.params.id)

    const user = USERS.find(user => user.id == userId)

    const { name, email } = req.body
    if (!user) {
        res.send("No existe el usuario")
    }
   
    if(name){
        user.name = name
    }
    if(email){
        user.email = email
    }

    res.send(user)
})

// Para crear un dato nuevo
router.post("/", (req, res) => {
    let idUser = USERS.length + 1

    USERS.push({
        id: idUser,
        name: `Usario ${idUser}`,
        email: `usuario${idUser}@example.com`
    })

    res.send(USERS)
})

// Para borrar algo.
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const userFilter = USERS.filter(user => user.id !== userId)
    if (userFilter.length === USERS.length) {
        res.send("No existe el usuario")
    } else {
        USERS = userFilter
        res.send(USERS)
    }

})


module.exports = router;
