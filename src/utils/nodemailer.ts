import nodemailer from "nodemailer";
import { generateCode } from "./generateCode.js";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASSKEY,
  },
});
// Elektron pochta yuborish funksiyasi
export const sendConfirmationEmail = async (userEmail: string) => {
  const confirmationCode = generateCode(); // Tasdiqlash kodi generatsiyalansin
  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Hi!",
    html: `<h1>
      Your password <br/>
     ${confirmationCode}
    </h1>`,
  };
  try {
    const result = await transporter.sendMail(mailOptions);


    return confirmationCode; // Tasdiqlash kodi qaytariladi

  } catch (error) {
    console.log(error);
    throw new Error('Email yuborishda xatolik yuz berdi');
  }
};