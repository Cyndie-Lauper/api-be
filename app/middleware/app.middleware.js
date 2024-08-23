import categoryRoutes from "../routes/category.route.js";
import productRoutes from "../routes/product.route.js";
import userRoutes from "../routes/user.route.js";

function registerRoutes(app) {
    app.use("/api", productRoutes);
    app.use("/api", categoryRoutes);
    app.use("/api", userRoutes);
}

export default registerRoutes;
