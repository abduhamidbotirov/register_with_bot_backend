import { NextFunction, Request, Response } from 'express';
import CategoryModel from '../schemas/category.schema.js'; // Kategoriya skhemasining joylashgan faylni o'zgartiring
import { ICategory } from '../interface/interface.js';
// Qolgan importlar

class CategoryController {
    async createCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const categoryData: ICategory = req.body;
            const newCategory = await CategoryModel.create({ name: categoryData.name });
            return res.status(201).json(newCategory);
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ message: error.message, status: 500 });
        }
    }
    async getAllCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await CategoryModel.find();
            return res.status(200).json(categories);
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ message: error.message, status: 500 });
        }
    }
    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        const categoryId = req.params.id;
        try {
            const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Category not found', status: 404 });
            }
            return res.status(200).json(deletedCategory);
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ message: error.message, status: 500 });
        }
    }
}

export default new CategoryController();
