import express from "express";
import { authenticate, authorize } from "../auth/auth.js";
import { validateCreateUser } from "../auth/validator.js";
import {
    createUser,
    deleteUser,
    getUser,
    getUserbyID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users", authenticate, authorize(["admin"]), getUser);

router.get("/user/:id", authenticate, authorize(["admin"]), getUserbyID);

router.post("/users", validateCreateUser, createUser);

router.delete("/users/:id", authenticate, authorize(["admin"]), deleteUser);

export default router;
