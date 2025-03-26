const mongoose = require("mongoose")

const mangaSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  imagen: { type: String, require: true },
  dibujante: { type: String, require: true },
  precio: { type: Number, require: true },
  categoria: { type: String, require: true, enum: ["terror", "psicologico", "amor","aventura", "creppy", "deportes", "accion", "drama", "suspense"] },
  verified: { type: Boolean, required: true, default: false }
}, {
  timestamps: true,
  collection: "mangas"
})

const mangas = mongoose.model("mangas", mangaSchema, "mangas")

module.exports = mangas