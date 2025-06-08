import { createProduct, getAllProducts } from "../models/ProductModel.js";

export const productlist = async (req, res) => {
  const product = await getAllProducts();
  res.json(product);
};

export const productAdd = async (req, res) => {
  const { name, description, price, stock, img } = req.body;
  //   const userId = req.user.id; // trae el middleware de auth cuando se autentique

  const newProduct = await createProduct(name, description, price, stock, img); // userId cuando se autentique
  res.status(201).json(newProduct);
};
