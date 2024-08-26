import express from "express";
import { authenticate, authorize } from "../../auth/auth.js";
import { validateCreateUser } from "../../auth/validator.js";
import {
    createUser,
    deleteUser,
    getUserbyId,
    getUsers,
    updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/users", authenticate, authorize(["admin"]), getUsers);

router.get("/user/:id", authenticate, authorize(["admin"]), getUserbyId);

router.post("/user", validateCreateUser, createUser);

router.patch("/user/:id", validateCreateUser, updateUser);

router.delete("/user/:id", authenticate, authorize(["admin"]), deleteUser);

export default router;
