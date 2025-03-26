const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  imagen: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  papel: { type: String, required: true, enum: ["admin", "user"], default: "user" },
  mangas: [{ type: mongoose.Types.ObjectId, ref: "mangas", require: false }]
}
  , {
    timestamp: true,
    collection: "user"
  }
)

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model("user", userSchema, "user");
module.exports = User