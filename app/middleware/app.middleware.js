import authRoutes from "../v1/routes/v1/auth.route.js";
import categoryRoutes from "../v1/routes/v1/category.route.js";
import productRoutes from "../v1/routes/v1/product.route.js";
import userRoutes from "../v1/routes/v1/user.route.js";

function registerRoutes(app) {
    app.use("/api/auth", authRoutes);
    app.use("/api/v1", productRoutes);
    app.use("/api/v1", categoryRoutes);
    app.use("/api/v1", userRoutes);
}

export default registerRoutes;
