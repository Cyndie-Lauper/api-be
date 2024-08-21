import express from "express";
// import accountRoutes from "../routes/account.routes.js";
// import categoryRoutes from "../routes/category.routes.js";
import productRoutes from "../routes/product.routes.js";

function registerRoutes() {
    const app = express();

    app.use("/api", productRoutes);
    // app.use("/api", categoryRoutes);
    // app.use("/api", accountRoutes);
}

export default registerRoutes;
