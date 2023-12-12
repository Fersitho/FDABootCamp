// Un server solo con node js!
// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html; charset=utf-8")
//     res.end("<h1> Hola, esto es lo tipico </h1>")
// })
const mongoose = require("mongoose")
const express = require("express")
const PORT = 3000
const userRouter = require("../routers/userRoutes")
const app = express()

require("dotenv").config();

const urlMongo = process.env.DATABASE_URL_DEV

mongoose.connect(urlMongo)
const db = mongoose.connection

db.on("error", (error) => {
    console.log(`Error al conectar con mongo ${error}`)
})
db.on("connected", () => {
    console.log(`Success connect to mongodb`)
})
db.on("disconnected", () => {
    console.log(`Mongo disconnected`)
})

app.use(express.json())

app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log("Server is running")
})

