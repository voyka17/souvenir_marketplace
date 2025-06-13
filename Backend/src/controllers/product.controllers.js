import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../models/ProductModel.js";

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

export const productUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, img } = req.body;

  try {
    const updatedProduct = await updateProduct(
      id,
      name,
      description,
      price,
      stock,
      img
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};

export const productDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProduct(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado correctamente", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
    console.log(error);
  }
};
