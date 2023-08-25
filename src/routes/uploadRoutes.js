import express from "express";
import uploadFile from "../controllers/uploadController.js";

const router = express.Router();

// API endpoint for file upload
router.post("/upload", uploadFile);

export default router;
