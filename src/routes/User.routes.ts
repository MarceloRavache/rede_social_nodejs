import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
} from "../controllers/User.controller";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

export default router;
