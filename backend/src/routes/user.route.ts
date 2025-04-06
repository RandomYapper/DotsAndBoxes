import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller";

const router = Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);

export default router;
