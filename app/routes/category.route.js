import { Router } from "express";
import { authenticate, authorize } from "../auth/auth.js";
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategorybyId,
    updateCategory,
} from "../controllers/category.controller.js";
const router = Router();

router.get("/categories", getCategories);

router.get("/category/:id", getCategorybyId);

router.post("/category", authenticate, authorize(["admin"]), createCategory);

router.patch(
    "/category/:id",
    authenticate,
    authorize(["admin"]),
    updateCategory
);

router.delete(
    "/category/:id",
    authenticate,
    authorize(["admin"]),
    deleteCategory
);

export default router;
