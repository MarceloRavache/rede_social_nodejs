import { Router } from "express";
import {
  getLikes,
  likePost,
  removeLikePost,
} from "../controllers/Like.controller";
import { userRoute } from "../middlewares/Authentication.middlewares";

const router = Router();

router.get("/likes/:id", userRoute, getLikes);
router.post("/likes", userRoute, likePost);
router.delete("/likes", userRoute, removeLikePost);

export default router;
