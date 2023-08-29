import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // .env faylidan o'qib oladi
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log('MongoDB-ga muvaffaqiyatli ulandik');
})
    .catch((error) => {
    console.error('MongoDB-ga ulanishda xatolik:', error);
});
