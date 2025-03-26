const Mangas = require("../models/mangas.js");
const { deleteFile } = require("../../utils/deleteFiles.js");
const User = require("../models/User.js"); 

const getMangaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const manga = await Mangas.findById(id);
    return res.status(200).json(manga);
  } catch (error) {
    return res.status(400).json("No se encontró ningún manga por ID");
  }
};

const getMangaByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const mangas = await Mangas.find({ categoria });
    return res.status(200).json(mangas);
  } catch (error) {
    return res.status(400).json("No se encontró ningún manga por categoría");
  }
};

const getMangas = async (req, res, next) => {
  try {
    const mangas = await Mangas.find({ verified: true });
    console.log("Contenido de mangas:", mangas); 
    return res.status(200).json(mangas);
  } catch (error) {
    return res.status(400).json("No se encontró ningún manga");
  }
};

const postManga = async (req, res, next) => {
  try {
    const { file, body } = req;

    console.log("Archivo subido:", file); 

    
    const newManga = new Mangas(body);

    
    if (file) {
      console.log("Ruta de la imagen que vamos a guardar:", file.path);
      newManga.imagen = file.path;
    }

    
    const mangaSaved = await newManga.save();
    console.log("Manga guardado:", mangaSaved);

    return res.status(200).json(mangaSaved);
  } catch (error) {
    console.error("Error al guardar el manga:", error); 
    return res.status(400).json({ error: "No se ha creado ningún manga" });
  }
};

const putManga = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newManga = new Mangas(req.body);
    newManga._id = id;

    if (req.file) {
      newManga.imagen = req.file.path;
      const oldManga = await Mangas.findById(id);
      deleteFile(oldManga.imagen);
    }

    const mangaUpdated = await Mangas.findByIdAndUpdate(id, newManga, { new: true });
    return res.status(200).json(mangaUpdated);
  } catch (error) {
    return res.status(400).json("No se actualizó ningún manga");
  }
};

const deleteManga = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mangaDeleted = await Mangas.findByIdAndDelete(id);
    deleteFile(mangaDeleted.imagen);
    return res.status(200).json(mangaDeleted);
  } catch (error) {
    return res.status(400).json("No se eliminó ningún manga");
  }
};

module.exports = {
  getMangaById,
  getMangaByCategory,
  getMangas,
  postManga,
  putManga,
  deleteManga,
};
