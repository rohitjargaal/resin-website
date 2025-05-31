import express from "express"
import { loginadmin } from "../controllers/AdminController.js";
const router = express.Router()

// router.post("/register", registeradmin);
router.post("/login", loginadmin);


export default router