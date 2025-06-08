import {getAllProducts} from '../models/productsModels.js'

const getProducts = async(req,res) =>{
    try {
        const data = await getAllProducts();
        res.status(200).json(data)
    } catch (error) {
        console.error("error en getAllProducts",error.message)
        res.status(500).json({error:"Error al obtener los productos"});
    }
}


export { getProducts };