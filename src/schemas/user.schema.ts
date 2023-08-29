import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interface/interface';
const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    family: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
});
const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
