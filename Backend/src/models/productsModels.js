import { pool } from "../config/db.js";

const getAllProducts= async() =>{
    const  { rows} = await pool.query("SELECT * FROM product");
    return rows;
}

export { getAllProducts };