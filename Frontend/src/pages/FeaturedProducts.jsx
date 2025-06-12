
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartProduct from "../components/card/CartProduct";
import  Sidebar  from "../components/layout/Sidebar.jsx";
import  Footer  from "../components/layout/Footer.jsx";

function FeaturedProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/product/featured")
      .then((res) => res.json())
      .then((data) => {setProducts(data);})
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex flex-1">
        {/* <aside className="w-64 bg-gray-800 text-white p-6">
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

        <main className="flex-1 bg-[#f2ddb6] lg:ml-[220px] p-4 md:p-6">
          <h1 className="text-3xl  font-bold mb-4 text-center">Productos Destacados</h1>
          <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <CartProduct
                key={product.id_product}
                id={product.id_product}
                name={product.name}
                price={product.price}
                stock={product.stock}
                description={product.description}
                image={`http://localhost:4001${product.image_url}`}
                onAddToCart={() => alert(`${product.name} agregado al carrito`)}
              />
            ))}
          </div>
          </div>
        </main>
      </div>
            <Footer></Footer>

    </div>
  );
}

export default FeaturedProduct;

