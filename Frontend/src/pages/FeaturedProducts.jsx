
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartProduct from "../components/card/CartProduct";

function FeaturedProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        // Filtra los productos que están destacados (featured)
        const destacados = data.filter((product) => product.featured === true);
        setProducts(destacados);
      })
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar y contenido */}
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white p-6">
          <h2 className="text-2xl font-bold mb-6">Logo</h2>
          <nav className="flex flex-col space-y-12">
            <Link to="/offert" className="hover:text-blue-300">Ofertas</Link>
            <Link to="/product" className="hover:text-blue-300">Todos los productos</Link>
            <Link to="/featured" className="hover:text-blue-300">Destacados</Link>
            <Link to="/cart" className="hover:text-blue-300">Carrito</Link>
            <Link to="/perfil" className="hover:text-blue-300">Perfil</Link>
            <Link to="/actualizar" className="hover:text-blue-300">Actualizar Perfil</Link>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold mb-4">Productos Destacados</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => alert(`${product.name} agregado al carrito`)}
              />
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-900 text-white text-center p-4">
        © 2025 SouvenirApp. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default FeaturedProduct;

