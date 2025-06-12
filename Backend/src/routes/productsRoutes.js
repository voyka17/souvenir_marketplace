import express from 'express';
import {getProducts, updateProduct,deleteProduct, getFeatured, getOffert,newProduct } from '../controllers/productsControllers.js';
import upload from '../middlewares/upload.js';


const router = express.Router();


router.get('/',getProducts);
router.get('/offert',getOffert);
router.get('/featured',getFeatured);
router.post('/',upload.single('image'),newProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);
export default router;