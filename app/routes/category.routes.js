import { Router } from 'express';
const router = Router();
import { getCategories, getCategoryById, createCategory, deleteCategory, updateCategory, getCategoryByName, getCategoryByMenuId, getCategoriesKiotviet, createCategoryKiotviet } from '../controllers/category.controller';


router.get('/categories', getCategories);

router.get('/categories/:id', getCategoryById);

router.post('/categories', createCategory);

router.delete('/categories/:id', deleteCategory);

router.put('/categories/:id', updateCategory);

router.get('/categories/name/:name', getCategoryByName);

router.get('/categories/menu/:menuId', getCategoryByMenuId);

router.get('/getCategoriesKiotviet', getCategoriesKiotviet);

router.post('/createCategoryKiotviet', createCategoryKiotviet);




export default router;
