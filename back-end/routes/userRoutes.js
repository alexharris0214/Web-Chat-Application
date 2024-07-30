import { Router } from "express";
const router = Router()
import { createUser, login } from "../controller/UserController.js";

router.post("/create", createUser)
router.post("/login", login)
export default router;