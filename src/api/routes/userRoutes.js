const { getUsers, registrer, login, deleteUser,putUser } = require("../controllers/userController.js")
const userRouter = require("express").Router()
const { isAdmin , isAuth} = require("../../middleware/auth.js")
const upload = require("../../middleware/file.js")


userRouter.get("/", [isAdmin], getUsers)
userRouter.post("/registrer", upload.single("imagen"), registrer)
userRouter.post("/login", login)
userRouter.put("/:id", [isAdmin, isAuth], upload.single("imagen"), putUser)
userRouter.delete("/delete/:id", [isAdmin, isAuth], deleteUser)





module.exports = userRouter
