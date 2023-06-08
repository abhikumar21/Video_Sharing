
import express from "express";
import { comment } from "../controllers/commentcontroller.js";

const router = express.Router();

router.get("/comment", comment);


export default router;