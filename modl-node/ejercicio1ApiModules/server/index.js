import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "../swagger/swaggerConfig.js"
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = 3000
const app = express()

app.use(express.json())

// configuracion mongoDB EVENTS
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
import userRoutes from '../routes/userRoutes.js'
app.use("/auth", userRoutes)
import eventsRoutes from '../routes/eventsRoutes.js'
app.use("/events", eventsRoutes)

// lanzamos el server
app.listen(PORT)
