import { Router } from "express";
const router = Router()
import { createUser } from "../controller/UserController";

router.post("/create", createUser)

export default router;