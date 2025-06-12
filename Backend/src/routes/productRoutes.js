import { Router } from "express";
import {
  productAdd,
  productDelete,
  productlist,
  productUpdate,
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/", productlist); // agregar verifyToken
router.post("/", productAdd);
router.put("/:id", productUpdate);
router.delete("/:id", productDelete);

export default router;