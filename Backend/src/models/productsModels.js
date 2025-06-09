import { pool } from "../config/db.js";

const getAllProducts= async() =>{
    const  { rows} = await pool.query("SELECT * FROM product");
    return rows;
}

const modifyProduct =async (id_product,{name,description, price, stock, image_url}) => {
    const query = "UPDATE product SET name = $1, description = $2, price = $3, stock = $4 , image_url =$5 WHERE id_product =$6 RETURNING *";
    const values=[name,description,price,stock,image_url,id_product];
    const result= await pool.query(query,values);
    return result.rows[0];

}

export { getAllProducts,modifyProduct };