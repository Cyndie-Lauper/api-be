import { User } from "../services/ins.service.js";

// @desc    Create users
// @route   POST /api/products
// @access  Private
const createUser = async (req, res) => {
    const result = await User.createUser(req.body);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result);
    }
};

// @desc    Get users by ID
// @route   Get /api/products/:id
// @access  Private or Authenticated
const getUser = async (req, res) => {
    const result = await User.getUserById(req.params.id);
    if (!result) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.json(result);
};

// @desc    Update users by ID
// @route   PUT /api/products/:id
// @access  Private
const updateUser = async (req, res) => {
    const result = await User.updateUser(req.params.id, req.body);
    if (!result) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.json(result);
};

// @desc    Delete users by ID
// @route   DELETE /api/products/:id
// @access  Private
const deleteUser = async (req, res) => {
    const result = await User.deleteUser(req.params.id);
    if (!result) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.status(204).send();
};

export { createUser, deleteUser, getUser, updateUser };
