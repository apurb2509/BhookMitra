import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js";
import fs from 'fs';
import path from 'path';

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Saving file to uploads folder...");
    cb(null, "uploads"); 
  },
  filename: (req, file, cb) => {
    console.log("Saving file:", file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage:storage });

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;