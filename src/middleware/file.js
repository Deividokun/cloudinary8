const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
   
    /*
    let folder = "animebellaco"; 
    if (req.baseUrl.includes("users")) {
      folder = "users"; 
    } else if (req.baseUrl.includes("cuadros")) {
      folder = "cuadros"; 
    }
    */

   
    return {
      folder: "animebellaco",
      allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`, 
    };
  },
});

const upload = multer({ storage });
module.exports = upload;