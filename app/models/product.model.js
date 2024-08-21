import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    inStock: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

const Product = model("Product", productSchema);

export default Product;
