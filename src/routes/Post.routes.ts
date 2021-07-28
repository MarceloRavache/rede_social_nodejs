import { Router } from "express";
import { createPost, getPosts } from "../controllers/Post.controller";
import { userRoute } from "../middlewares/Authentication.middlewares";

const router = Router();

router.get("/posts", userRoute, getPosts);
router.post("/posts", userRoute, createPost);

export default router;
