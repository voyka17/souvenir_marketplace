import express from 'express';
import {getProducts, updateProduct,deleteProduct} from '../controllers/productsControllers.js';


const router = express.Router();


router.get('/product',getProducts);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);
export default router;