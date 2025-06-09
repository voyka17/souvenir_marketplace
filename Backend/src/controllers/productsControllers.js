import { pool } from '../config/db.js';
import {getAllProducts, modifyProduct,deleteAllProduct} from '../models/productsModels.js'

const getProducts = async(req,res) =>{

    try {
        const data = await getAllProducts();
        res.status(200).json(data)
    } catch (error) {
        console.error("error en getAllProducts",error.message)
        res.status(500).json({error:"Error al obtener los productos"});
    }
}

const updateProduct = async(req,res) =>{

   try {
     const {id}= req.params;
     const {name,description, price, stock, image_url,is_offer,is_featured} = req.body;
     const result = await modifyProduct (id,{name,description,price,stock,image_url,is_offer,is_featured});
 
     if (result)
         res.status(200).json( {message:"Producto actualizado con exito"});
     else
         res.status(400).json ({error:"No se pudo actualizar el producto"});
   } catch (error) {
    console.error("error en updateProductos",error.message);
    res.status(500).json({error:"Error al actualizar el producto"})
    
   }

};


const deleteProduct = async (req,res) =>{

try {
    const {id}= req.params;
    const result = await deleteAllProduct (id);
    if (result.rowCount > 0)
        res.status(200).json ({message:"Regsitro borrado con exito"});
    else
        res.status(400).json({error:"No se borro el producto"})
} catch (error) {
    console.error("error en deleteProduct",error.message)
    res.status(500).json({error:"no se a podido ejecutar la operacion"})
    
}
};


export { getProducts,updateProduct,deleteProduct };