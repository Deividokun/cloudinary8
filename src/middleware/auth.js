const { verifyJwt } = require("../config/jwt.js")
const User = require("../api/models/User.js")

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace("Bearer ", "")

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)
    user.password = null
    req.user = user

    next()

  } catch (error) {
    console.log(error);
    return res.status(400).json("No autorizado")
  }
}


const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace("Bearer ", "")

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    if (user.rol === "admin") {
      user.password = null
      req.user = user

      next()
    } else {
      return res.status(400).json("no eres admin")
    }


  } catch (error) {
    console.log(error);
    return res.status(400).json("No puedes acceder a esta accion")
  }
}

module.exports = { isAuth, isAdmin }