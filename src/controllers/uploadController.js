const uploadController = (req, res) => {
  console.log("Request body:", req.body);
  console.log("Uploaded file:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const response = {
    path: `${req.file.destination}/${req.file.filename}`,
    originalFilename: req.file.originalname,
  };

  res.json(response);
};

export default uploadController;
