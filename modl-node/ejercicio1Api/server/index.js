const express = require("express")
const PORT = 3000

const app = express()
app.use(express.json())

// rutas

// rutas api


app.listen(PORT, () => {
    console.log("Server is running")
})
