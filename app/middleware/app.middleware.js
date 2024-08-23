import authRoutes from "../routes/auth.route.js";
import categoryRoutes from "../routes/category.route.js";
import productRoutes from "../routes/product.route.js";
import userRoutes from "../routes/user.route.js";

function registerRoutes(app) {
    app.use("/api/auth", authRoutes);
    app.use("/api/v1", productRoutes);
    app.use("/api/v1", categoryRoutes);
    app.use("/api/v1", userRoutes);
}

export default registerRoutes;
