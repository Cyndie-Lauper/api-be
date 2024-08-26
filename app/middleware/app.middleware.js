import authRoutes from "../v1/routes/auth.route.js";
import categoryRoutes from "../v1/routes/category.route.js";
import productRoutes from "../v1/routes/product.route.js";
import userRoutes from "../v1/routes/user.route.js";

function registerRoutes(app) {
    app.use("/api/auth", authRoutes);
    app.use("/api/v1", productRoutes);
    app.use("/api/v1", categoryRoutes);
    app.use("/api/v1", userRoutes);
}

export default registerRoutes;
