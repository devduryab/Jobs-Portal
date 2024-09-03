import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/login").get(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;