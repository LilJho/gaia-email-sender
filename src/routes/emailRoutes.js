import express from "express";
import sendEmailController from "../controllers/sendEmailController.js";

const emailRouter = express.Router();

emailRouter.post("/send-email", sendEmailController);

export default emailRouter;
