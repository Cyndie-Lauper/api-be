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

router.get("/getUsers", authenticate, authorize(["admin"]), getUser);

router.get("/getUsers/:id", authenticate, authorize(["admin"]), getUserbyID);

router.post("/createUsers", validateCreateUser, createUser);

router.delete(
    "/deteleUsers/:id",
    authenticate,
    authorize(["admin"]),
    deleteUser
);

export default router;
