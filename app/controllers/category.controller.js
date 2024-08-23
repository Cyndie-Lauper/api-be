import { Category } from "../services/ins.service.js";

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
export const getCategories = async (req, res) => {
    const result = await Category.getAllCategory();

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
};
