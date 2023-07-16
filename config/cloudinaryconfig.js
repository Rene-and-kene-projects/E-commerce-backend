import _cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

const cloudinary = _cloudinary.v2;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

export async function uploadImage(file) {
  try {
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "image",
      folder: "Ecommerce/images"
    });

    return response;
  } catch (error) {
    throw new Error(`From Cloudinary: ${error || error.message}`);
  }
}

export async function deleteFile(fileId) {
  try {
    const response = await cloudinary.uploader.destroy(fileId);
    return response;
  } catch (err) {
    throw new Error(`From Cloudinary: ${err}`);
  }
}

export default {
  uploadImage,
  deleteFile
};
