// Un server solo con node js!
// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html; charset=utf-8")
//     res.end("<h1> Hola, esto es lo tipico </h1>")
// })

const express = require('express')
const PORT = 3000
const userRouter = require('../routers/userRoutes')
const app = express()

app.use(express.json())

app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log('Server is running')
})

