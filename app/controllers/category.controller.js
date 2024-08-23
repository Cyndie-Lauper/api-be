import { Category } from "../services/ins.service.js";

// @desc    Get all categories
// @route   GET /api/v1/categories
// @access  Public
export const getCategories = async (req, res) => {
    try {
        const result = await Category.getAllCategory();
        res.json({ success: true, data: result });
    } catch (error) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Get category by Id
// @route   GET /api/v1/category/:id
// @access  Public
export const getCategorybyId = async (req, res) => {
    try {
        const result = await Category.getCategoryById(req.params.id);
        res.json({ success: true, data: result });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Create category
// @route   POST /api/v1/category
// @access  Private
export const createCategory = async (req, res) => {
    try {
        const result = await Category.createCategory(req.body);
        res.json({
            success: true,
            data: result,
            message: "Category created successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Update category by Id
// @route   POST /api/v1/category/:id
// @access  Private
export const updateCategory = async (req, res) => {
    try {
        const result = await Category.updateCategory(req.params.id, req.body);
        res.json({
            success: true,
            data: result,
            message: "Category update successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Delete category
// @route   DELETE /api/v1/category/:id
// @access  Private
export const deleteCategory = async (req, res) => {
    try {
        const result = await Category.deleteCategory(req.params.id);
        res.json({
            success: true,
            data: result,
            message: "Category delete successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};
