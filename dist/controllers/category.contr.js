var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CategoryModel from '../schemas/category.schema.js'; // Kategoriya skhemasining joylashgan faylni o'zgartiring
// Qolgan importlar
class CategoryController {
    createCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryData = req.body;
                const newCategory = yield CategoryModel.create({ name: categoryData.name });
                return res.status(201).json(newCategory);
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).json({ message: error.message, status: 500 });
            }
        });
    }
    getAllCategories(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield CategoryModel.find();
                return res.status(200).json(categories);
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).json({ message: error.message, status: 500 });
            }
        });
    }
    deleteCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryId = req.params.id;
            try {
                const deletedCategory = yield CategoryModel.findByIdAndDelete(categoryId);
                if (!deletedCategory) {
                    return res.status(404).json({ message: 'Category not found', status: 404 });
                }
                return res.status(200).json(deletedCategory);
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).json({ message: error.message, status: 500 });
            }
        });
    }
}
export default new CategoryController();
