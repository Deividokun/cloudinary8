const { 
  getMangaById, 
  getMangaByCategory, 
  getMangas, 
  postManga, 
  putManga, 
  deleteManga 
} = require("../controllers/mangasController.js");
const mangasRouter = require("express").Router();
const { isAuth, isAdmin } = require("../../middleware/auth.js");
const upload = require("../../middleware/file.js");

mangasRouter.get("/categoria/:categoria", getMangaByCategory); 
mangasRouter.get("/:id", getMangaById); 
mangasRouter.get("/", getMangas); 
mangasRouter.post("/", [isAuth], upload.single("imagen"), postManga); 
mangasRouter.put("/:id", [isAdmin], upload.single("imagen"), putManga); 
mangasRouter.delete("/:id", [isAdmin], deleteManga); 

module.exports = mangasRouter;
