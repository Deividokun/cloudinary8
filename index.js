require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const cloudinary = require("cloudinary").v2
const { connectDB } = require("./src/config/db.js")
const mangasRouter = require("./src/api/routes/mangasRoutes.js")
const userRouter = require("./src/api/routes/userRoutes.js")


const app = express()
app.use(express.json())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

connectDB()

app.use("/api/v1/mangas", mangasRouter)
app.use("/api/v1/users", userRouter)

app.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada")
})

app.listen(4000, () => {
  console.log("Servidor levantado en: http://localhost:4000");
});