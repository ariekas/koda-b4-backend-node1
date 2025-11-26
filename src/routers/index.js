import { Router } from "express";
import authRouter from "./auth.router.js";
import productRouter from "./product.router.js";


const router = Router();

router.use("/", authRouter);
router.use("/products", productRouter);

export default router;
