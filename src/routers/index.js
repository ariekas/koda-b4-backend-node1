import { Router } from "express";
import authRouter from "./auth.router.js";
import productRouter from "./product.router.js";
import { authMiddelware } from "../lib/middelware/auth,middleware.js";


const router = Router();

router.use("/", authRouter);
router.use("/products",authMiddelware, productRouter);

export default router;
