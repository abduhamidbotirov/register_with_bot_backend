import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    name: { type: String, required: true },
    family: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
});
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
