import { Router } from "express";
import { productAdd, productlist } from "../controllers/product.controllers.js";

const router = Router();

router.get("/", productlist); // agregar verifyToken
router.post("/", productAdd);

export default router;
