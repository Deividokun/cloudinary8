const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("conexión a mongodb exitosa");

  } catch (error) {
    console.log(error)
    console.log("Error al conectar a la base de datos");
  }
}

module.exports = { connectDB }