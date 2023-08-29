import { Router } from "express";
import category from "../controllers/category.contr.js";
const router = Router();
router.post('/', category.createCategory);
router.get('/', category.getAllCategories);
router.delete('/:id', category.deleteCategory);
// router.get('/nation',countriesController.nationGetter)
export default router;
