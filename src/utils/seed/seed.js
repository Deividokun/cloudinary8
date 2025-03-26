const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../../api/models/User')
require('dotenv').config() 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conectado a la base de datos')
  } catch (error) {
    console.log('Error al conectar a la base de datos', error)
  }
}


const seedUsers = async () => {
  await connectDB()

  const users = [
    {
      nombre: 'admin',
      password: bcrypt.hashSync('admin123', 15),
      rol: 'admin',
      email: "user1233@gmail.com",
      imagen: "https://www.google.com"
    },
    {
      nombre: 'user1',
      password: bcrypt.hashSync('user123', 15),
      rol: 'user',
       email: "user1323@gmail.com",
      imagen: "https://www.google.com"
    },
    {
      nombre: 'user2',
      password: bcrypt.hashSync('user123', 15),
      rol: 'user',
       email: "user13323@gmail.com",
      imagen: "https://www.google.com"
    },
    {
      nombre: 'user3',
      password: bcrypt.hashSync('user123', 15),
      rol: 'user',
       email: "user123333@gmail.com",
      imagen: "https://www.google.com"
    }
  ]

  try {
    // Eliminar los usuarios existentes en la colección
    // await User.deleteMany({})
    // console.log('Usuarios existentes eliminados')

    
    const createdUsers = await User.insertMany(users)
    console.log('Usuarios insertados:', createdUsers)

    mongoose.connection.close()
  } catch (error) {
    console.log('Error al insertar usuarios:', error)
    mongoose.connection.close()
  }
}


seedUsers()
