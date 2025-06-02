import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import CartProduct from "../components/card/CartProduct";
import { CartContext } from "../context/cartContext.jsx";
import  Sidebar  from "../components/layout/Sidebar.jsx";

function SalesProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex flex-1">
        
        {/* <aside className="w-64 bg-[#f2b035] text-black p-6">
          <h2 className="text-2xl font-bold mb-6">Logo</h2>
          
          <nav className="flex flex-col space-y-12">
            
            <Link to="/offert" className="hover:text-blue-300">Ofertas</Link>
            <Link to="/product" className="hover:text-blue-300">Todos los productos</Link>
            <Link to="/featured" className="hover:text-blue-300">Destacados</Link>
            <Link to="/cart" className="hover:text-blue-300">Carrito</Link>
            <Link to="/perfil" className="hover:text-blue-300">Perfil</Link>
            <Link to="/actualizar" className="hover:text-blue-300">Actualizar Perfil</Link>
          </nav>
        </aside> */}

        <main className="flex-1 bg-[#f2ddb6] p-6">
          <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
          </div>
        </main>
      </div>


    </div>
  );
}

export default SalesProducts;