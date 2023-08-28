import express from "express";
import multer from "multer";

const testRouter = express.Router();
const upload = multer(); // Initialize multer

testRouter.post("/test-upload", upload.single("file"), (req, res) => {
  console.log("test-upload");
  console.log("req body", req.body);
  console.log("req file", req.file);

  const destinationPath = req.body.destinationPath;
  res.status(200).send(destinationPath);
});

export default testRouter;
