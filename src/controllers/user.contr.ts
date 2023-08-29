import { Request, Response } from 'express';
import UserModel from '../schemas/user.schema.js';
import { IUser } from '../interface/interface.js';
import { Telegraf } from 'telegraf';

class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const userData: IUser = req.body;
            const newUser = await UserModel.create(userData);

            const bot = new Telegraf(process.env.TG_BOT_TOKEN as string);
            const message = `
                Yangi foydalanuvchi yaratildi:
                Ismi: ${newUser.name}
                Familyasi: ${newUser.family}
                Telefon raqami: ${newUser.phone}
                Kategoriya: ${newUser.category}
            `;

            bot.telegram.sendMessage(process.env.TG_CHAT_ID as string, message);
            bot.launch(); // Botni ishga tushirish

            return res.status(201).send({ sucsses: true, data: newUser });
        } catch (error: any) {
            console.error(error.message);
            return res.status(500).json({ message: error.message, status: 500 });
        }
    }
}

export default new UserController();
