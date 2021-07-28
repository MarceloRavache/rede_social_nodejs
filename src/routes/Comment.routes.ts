import { Router } from "express";
import { createComment, getComments } from "../controllers/Comment.controller";
import { userRoute } from "../middlewares/Authentication.middlewares";

const router = Router();

router.get("/comments/:id", userRoute, getComments);
router.post("/comments", userRoute, createComment);

export default router;
