const cloudinary = require("cloudinary").v2; // Use the Cloudinary library
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // Use Multer Storage for Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png", "jpeg", "jpeg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
