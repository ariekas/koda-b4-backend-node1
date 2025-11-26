import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";
const router = Router();
import { body } from "express-validator";

router.post(
  "/login",
  body(["email", "password"], "field is mandatory").notEmpty(),
  body("password", "password much be leght 6").isLength(6),
  body("email", "is not valid format").isEmail(),
  loginController
);
router.post(
  "/register",
  body(["email", "password"], "field is mandatory").notEmpty(),
  body("password", "password much be leght 6").isLength(6),
  body("email", "is not valid format").isEmail(),
  registerController
);

export default router;
