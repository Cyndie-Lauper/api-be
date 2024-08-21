import { getAllProducts } from "../services/product.service.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    const result = await getAllProducts();

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(500).json(result);
    }
};

export { getProducts };
