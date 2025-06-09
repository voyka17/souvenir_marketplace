import express from 'express';
import {getProducts, updateProduct} from '../controllers/productsControllers.js';


const router = express.Router();


router.get('/product',getProducts);
router.put('/product/:id',updateProduct)

export default router;