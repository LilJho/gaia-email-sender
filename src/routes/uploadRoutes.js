import express from "express";
import uploadController from "../controllers/uploadController.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const uploadRouter = express.Router();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dynamicDestination = req.body.destinationPath;
    cb(null, dynamicDestination);
  },
  filename: function (_, file, cb) {
    const uniqueFileName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage: fileStorage }).single("file");

// API endpoint for file upload
uploadRouter.post("/upload", upload, uploadController);

export default uploadRouter;
