var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "../db/mongo.js";
import express from "express";
import cors from "cors";
import indexRouter from "../routes/index.routes.js";
import fileUpload from "express-fileupload";
const app = express();
const PORT = Number(process.env.PORT) || 5000;
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${process.cwd()}/src/public`));
app.use("/api", indexRouter);
app.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome to the Jop API.",
            postmen: "https://documenter.getpostman.com/view/24139682/2s93si1pwE",
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}));
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
