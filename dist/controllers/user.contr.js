var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserModel from '../schemas/user.schema.js';
import { Telegraf } from 'telegraf';
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                const newUser = yield UserModel.create(userData);
                const bot = new Telegraf(process.env.TG_BOT_TOKEN);
                const message = `
                Yangi foydalanuvchi yaratildi:
                Ismi: ${newUser.name}
                Familyasi: ${newUser.family}
                Telefon raqami: ${newUser.phone}
                Kategoriya: ${newUser.category}
            `;
                bot.telegram.sendMessage(process.env.TG_CHAT_ID, message);
                bot.launch(); // Botni ishga tushirish
                return res.status(201).send({ sucsses: true, data: newUser });
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).json({ message: error.message, status: 500 });
            }
        });
    }
}
export default new UserController();
