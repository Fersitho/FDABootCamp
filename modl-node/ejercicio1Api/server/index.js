const swaggerUi = require("swagger-ui-express")
const swaggerJSDoc = require("../swagger/swaggerConfig")

const mongoose = require("mongoose")
const express = require("express")
const PORT = 3000

const app = express()

require("dotenv").config();

app.use(express.json())

// config mongoDB EVENTS
const urlMongo = process.env.DATABASE_URL_DEV
mongoose.connect(urlMongo)
const db = mongoose.connection
// listen mongodb connection
db.on("error", (error) => {
    console.log(`Connection Error MongoDB: ${error}`)
})
db.on("connected", () => {
    console.log(`Success connect to mongoDB`)
})
db.on("disconnected", () => {
    console.log(`MongoDB disconnected`)
})

// ruta doc API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc))

// rutas api
const userRoutes = require('../routes/userRoutes')
app.use("/auth", userRoutes)
const eventsRoutes = require('../routes/eventsRoutes')
app.use("/events", eventsRoutes)

// lanzamos el server
app.listen(PORT, () => {
    console.log("Server is running")
})
