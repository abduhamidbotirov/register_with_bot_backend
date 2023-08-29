import { Router } from "express";
import cate from "./cate.routes.js";
import user from "./user.routes.js";
const router = Router();
router.use("/category", cate);
router.use("/users", user);
export default router;
