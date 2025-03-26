const User = require("../models/User.js")
const { generateSing } = require("../../config/jwt.js")
const bcrypt = require("bcrypt")
const { deleteFile } = require("../../utils/deleteFiles.js")
const getUsers = async (req, res, next) => {
  try {
    const user = await User.find()
    return res.status(200).json(user)

  } catch (error) {
    console.log(error);
    return res.status(400).json("No se ha encontrado ningún usuario")
  }
}


const registrer = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    newUser.rol = "user";

    if (req.file) {
      newUser.imagen = req.file.path;
    }

    const userSaved = await newUser.save();
    console.log("Usuario guardado:", userSaved); 
    return res.status(201).json(userSaved);

  } catch (error) {
    console.error("Error al registrar usuario:", error); 
    return res.status(500).json({ error: error.message });
  }
};


const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ nombre: req.body.nombre })

    if (!user) {
      return res.status(400).json("No existe usuario")
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSing(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json("contraseña incorrecta")
    }


  } catch (error) {
    console.log(error);
    return res.status(400).json("No hemos podido hacer login")
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    
    const userDeleted = await User.findByIdAndDelete(id);
    if (!userDeleted) {
      return res.status(404).json("No se encontró el usuario para eliminar");
    }

    
    deleteFile(userDeleted.imagen);

    return res.status(200).json(userDeleted);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    return res.status(400).json("No se eliminó ningún usuario");
  }
};

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    
    const newUser = new User(req.body);
    newUser._id = id; 

   
    if (req.file) {
      newUser.imagen = req.file.path; 
      const oldUser = await User.findById(id); 
      if (oldUser && oldUser.imagen) {
        deleteFile(oldUser.imagen); 
      }
    }

   
    const userUpdated = await User.findByIdAndUpdate(id, newUser, { new: true });
    if (!userUpdated) {
      return res.status(404).json("No se encontró el usuario para actualizar");
    }

    return res.status(200).json(userUpdated);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return res.status(400).json("No se actualizó ningún usuario");
  }
};

module.exports = { getUsers, registrer, login, deleteUser, putUser }