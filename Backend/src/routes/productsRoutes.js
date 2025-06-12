import express from 'express';
import {getProducts, updateProduct,deleteProduct, getFeatured, getOffert,newProduct } from '../controllers/productsControllers.js';

const router = express.Router();

router.get('/product',getProducts);
router.get('/offert',getOffert);
router.get('/featured',getFeatured);
router.post('/product',newProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);
export default router;