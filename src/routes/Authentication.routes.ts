import { Router } from "express";
import { login } from "../controllers/Authentication.controller";

const router = Router();

router.post("/login", login);

export default router;
