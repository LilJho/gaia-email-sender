import express from "express";
import cors from "cors";
import emailRouter from "./src/routes/emailRoutes.js";
import uploadRouter from "./src/routes/uploadRoutes.js";
import testRouter from "./src/routes/testRoutes.js";

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());

// Use updated emailRoutes
app.use("/api", emailRouter);
app.use("/api", uploadRouter);
app.use("/api", testRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
