import { pool } from "../config/db.js";

const getAllProducts= async() =>{
    const  { rows} = await pool.query("SELECT * FROM product");
    return rows;
}

const modifyProduct =async (id_product,{name,description, price, stock, image_url,is_offer,is_featured}) => {
    const query = "UPDATE product SET name = $1, description = $2, price = $3, stock = $4 , image_url =$5, is_offer =$6, is_featured =$7 WHERE id_product =$8 RETURNING *";
    const values=[name,description,price,stock,image_url,is_offer,is_featured,id_product];
    const result= await pool.query(query,values);
    return result.rows[0];

}


const deleteAllProduct = async (id_product) =>{
    const query = "DELETE FROM product WHERE id_product =$1 RETURNING *";
    const result = await pool.query(query,[id_product])
    return result;

}

export { getAllProducts,modifyProduct,deleteAllProduct };