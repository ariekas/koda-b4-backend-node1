import { Router } from "express";
import { listProducts } from "../controllers/product.controller.js";
// const upload = require("./../../lib/middelware/uploadImage");
const router = Router();

router.get("/", listProducts);
// router.post("/", productController.CreateProduct);
// router.patch("/:id", productController.EditProduct);
// router.get("/:id", productController.detailProduct);
// router.delete("/:id", productController.deleteProduct);
// router.post(
//   "/upload/image/:id",
//   upload.single("image"),
//   productController.uploadImage
// );

export default router;
