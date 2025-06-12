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

export const updateProduct = async (
  id,
  name,
  description,
  price,
  stock,
  img
) => {
  const result = await pool.query(
    `UPDATE product 
     SET name = $1, description = $2, price = $3, stock = $4, img = $5 
     WHERE id_product = $6 
     RETURNING *`,
    [name, description, price, stock, img, id]
  );
  return result.rows[0];
};

export const deleteProduct = async (id) => {
  const result = await pool.query(
    "DELETE FROM product WHERE id_product = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};