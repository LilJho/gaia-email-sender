import multer from "multer";
import path from "path";

const uploadFile = (req, res) => {
  const { destinationPath } = req.body; // Get the destination path from the request body

  if (!destinationPath) {
    return res.status(400).send("Destination path is missing");
  }

  const storage = multer.diskStorage({
    destination: function (_, __, cb) {
      const uploadPath = path.join(__dirname, "..", destinationPath);
      cb(null, uploadPath);
    },
    filename: function (_, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(500).send("File upload failed");
    }
    res.send("File uploaded successfully");
  });
};

export default uploadFile;
