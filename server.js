import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import emailRoutes from "./src/routes/emailRoutes";
import uploadRoutes from "./src/routes/uploadRoutes";

const app = express();
const PORT = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(cors());

// Use updated emailRoutes
app.use("/api", emailRoutes);
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
