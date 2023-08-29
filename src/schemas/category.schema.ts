import mongoose, { Schema, Document } from 'mongoose';
import { ICategory } from '../interface/interface';



const CategorySchema: Schema = new Schema({
    name: { type: String, required: true },
});

const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);

export default CategoryModel;
