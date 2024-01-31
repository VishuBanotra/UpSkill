import express from "express";

import { authMiddleware } from "../Middleware/authMiddleware.js";

// User Controller
import { me } from "../Controller/user.controller.js";
import { login } from "../Controller/user.controller.js";
import { signup } from "../Controller/user.controller.js";

// Admin Controller
import { adminMe } from "../Controller/admin.controller.js";
import { adminLogin } from "../Controller/admin.controller.js";
import { adminSignup } from "../Controller/admin.controller.js";

const router = express.Router();

// User Routes
router.get("/user/me", authMiddleware, me);
router.post("/user/login", login);
router.post("/user/signup", signup);

// Admin Routes
router.get("/admin/me", authMiddleware, adminMe);
router.post("/admin/login", adminLogin);
router.post("/admin/signup", adminSignup);

export default router;
