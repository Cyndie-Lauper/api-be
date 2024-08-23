import { User } from "../services/ins.service.js";

// @desc    Create users
// @route   POST /api/v1/user
// @access  Private
export const createUser = async (req, res) => {
    try {
        const result = await User.createUser(req.body);
        res.json({
            success: true,
            data: result,
            message: "User created successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Get all users
// @route   Get /api/v1/users
// @access  Private or Authenticated
export const getUsers = async (req, res) => {
    try {
        const result = await User.getAllUsers();
        res.json({ success: true, data: result });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Get user by ID
// @route   Get /api/v1/user/:id
// @access  Private or Authenticated
export const getUserbyId = async (req, res) => {
    try {
        const result = await User.getUserById(req.params.id);
        res.json({
            success: true,
            data: result,
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Update user by ID
// @route   PUT /api/v1/user/:id
// @access  Private
export const updateUser = async (req, res) => {
    try {
        const result = await User.updateUser(req.params.id, req.body);
        res.json({
            success: true,
            data: result,
            message: "User update successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};

// @desc    Delete user by ID
// @route   DELETE /api/v1/user/:id
// @access  Private
export const deleteUser = async (req, res) => {
    try {
        const result = await User.deleteUser(req.params.id);
        res.json({
            success: true,
            data: result,
            message: "User delete successfully",
        });
    } catch (err) {
        const errorMessage =
            process.env.NODE_ENV === "development"
                ? err.stack
                : "An error occurred, please try again later";
        res.status(404).json({ success: false, message: errorMessage });
    }
};
