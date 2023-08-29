import { Router } from "express";
import user from "../controllers/user.contr.js";

const router = Router();
router.post('/', user.createUser)
// router.get('/nation',countriesController.nationGetter)
export default router