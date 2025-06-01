import React, { useContext } from "react";
import { CartContext } from "../context/cartContext.jsx";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen">
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
          <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(({ id, name, price, image, quantity }) => (
                <div key={id} className="flex items-center bg-white p-4 rounded shadow">
                  <img src={image} alt={name} className="w-20 h-20 object-cover mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p>Cantidad: {quantity}</p>
                    <p>Precio unitario: ${price}</p>
                    <p>Subtotal: ${price * quantity}</p>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => removeFromCart(id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="bg-gray-900 text-white text-center p-4">
        © 2025 SouvenirApp. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default CartPage;