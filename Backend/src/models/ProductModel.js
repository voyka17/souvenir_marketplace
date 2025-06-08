import { pool } from "../config/db.js";

export const getAllProducts = async () => {
  const result = await pool.query(
    "SELECT * FROM product ORDER BY id_product ASC"
  );
  return result.rows;
};

export const createProduct = async (name, description, price, stock, img) => {
  const result = await pool.query(
    "INSERT INTO product (name, description, price, stock, img) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, description, price, stock, img]
  );
  return result.rows[0];
};
