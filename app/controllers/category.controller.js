import { Category } from "../services/instances.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getCategories = async (req, res) => {
    const result = await Category.getAllCategory();

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
};

export { getCategories };
