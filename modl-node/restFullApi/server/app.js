const http = require('http')
const express = require('express')

const PORT = 3000

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html; charset=utf-8")
//     res.end("<h1> Hola, esto es lo tipico </h1>")
// })

const app = express()

app.use(express.json())

const users = require('../controllers/usersControlers')

app.use("/users", users)

app.listen(PORT, () => {
    console.log('Server is running')
})

