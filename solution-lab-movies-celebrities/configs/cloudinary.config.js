const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  // cloudinary: cloudinary,
  cloudinary,
  folder: "movies", // the name of the folder in the cloudinary
  allowedFormats: ["png", "jpg"],
  // params: { resource_type: raw } // if you want to upload other types of files, not just images
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep the same names in cloudinary as i have them on my local machine
  }
});

module.exports = multer({ storage });
