import express from "express";

import { authMiddleware } from "../middleware/authMiddleware";

// User Controller
import { me } from "../controller/user.controller";
import { login } from "../controller/user.controller";
import { signup } from "../controller/user.controller";
// Admin Controller
import { adminMe } from "../controller/admin.controller";
import { adminLogin } from "../controller/admin.controller";
import { adminSignup } from "../controller/admin.controller";

const router = express.Router();

// User Routes
router.get("/user/me", authMiddleware, me);
router.post("/user/login", login);
router.post("/user/signup", signup);

// Admin Routes
router.get("/admin/me", authMiddleware, adminMe);
router.post("/admin/login", adminLogin);
router.post("/admin/signup", adminSignup);

export { router as userRoute };
