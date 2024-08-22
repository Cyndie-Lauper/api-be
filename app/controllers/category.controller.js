import { getAllCategories } from "../services/category.service.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getCategories = async (req, res) => {
    const result = await getAllCategories();

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
};

export { getCategories };
