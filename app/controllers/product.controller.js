import { Product } from "../services/ins.service.js";

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Public
export const getProducts = async (req, res) => {
    try {
        const result = await Product.getAllProducts();
        res.json({ success: true, data: result });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Get product by Id
// @route   GET /api/v1/product/:id
// @access  Public
export const getProductbyId = async (req, res) => {
    try {
        const result = await Product.getProductbyId(req.params.id);
        res.json({ success: true, data: result });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Create product
// @route   POST /api/v1/product
// @access  Private
export const createProduct = async (req, res) => {
    try {
        const result = await Product.createProduct(req.body);
        res.json({
            success: true,
            data: result,
            message: "Product created successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Update product by Id
// @route   PUT /api/v1/product/:id
// @access  Private
export const updateProduct = async (req, res) => {
    try {
        const result = await Product.updateProduct(req.params.id, req.body);
        res.json({
            success: true,
            data: result,
            message: "Product update successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Delete product by Id
// @route   DELETE /api/v1/product/:id
// @access  Private
export const deleteProduct = async (req, res) => {
    try {
        const result = await Product.deleteProduct(req.params.id);
        res.json({
            success: true,
            data: result,
            message: "Product delete successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};
