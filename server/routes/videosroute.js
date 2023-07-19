
import express from "express";
import { addVideo, deleteVideo, getVideo, getbytagVideo, randomVideo, searchVideo, subscribedVideo, trendingVideo, updateVideo, viewVideo } from "../controllers/videocontroller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/post", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", verifyToken, viewVideo)
router.get("/trend", trendingVideo)
router.get("/random", randomVideo)
router.get("/sub",verifyToken, subscribedVideo)
router.get("/tags", getbytagVideo)
router.get("/search", searchVideo)





export default router;