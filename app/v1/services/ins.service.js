import CategoryService from "./category.service.js";
import ProductService from "./product.service.js";
import UserService from "./user.service.js";

const User = new UserService();
const Product = new ProductService();
const Category = new CategoryService();

export { Category, Product, User };
