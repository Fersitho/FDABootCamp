import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "../swagger/swaggerConfig.js";

dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json());

// configuracion mongoDB EVENTS
const urlMongo = process.env.DATABASE_URL_DEV;
mongoose.connect(urlMongo);
const db = mongoose.connection;

// listen mongodb connection
db.on("error", (error) => {
  console.log(`Connection Error MongoDB: ${error}`);
});
db.on("connected", () => {
  console.log(`Success connect to mongoDB`);
});
db.on("disconnected", () => {
  console.log(`MongoDB disconnected`);
});

// SWAGGER DOC API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

// API ROUTES
import movieRoutes from "../routes/movieRoutes.js";
app.use("/movies", movieRoutes);

app.listen(PORT, () => console.log("Server is running"));
