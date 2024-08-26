import express from "express";
import { authenticate, authorize } from "../../auth/auth.js";
import {
    createProduct,
    deleteProduct,
    getProductbyId,
    getProducts,
    updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/product/:id", getProductbyId);

router.post("/product", authenticate, authorize(["admin"]), createProduct);

router.patch("/product/:id", authenticate, authorize(["admin"]), updateProduct);

router.delete(
    "/product/:id",
    authenticate,
    authorize(["admin"]),
    deleteProduct
);

export default router;
