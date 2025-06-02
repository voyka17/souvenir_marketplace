import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/bannerMovil.png'; // Asegúrate que esta ruta sea correcta

import Footer from '../components/layout/Footer.jsx';
import { FaPoo } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <>


      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Contenido principal */}
        <main className="flex flex-1 items-center justify-center px-4">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
            <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Página no encontrada
            </h2>
            <p className="text-gray-700 mb-6">
              Lo sentimos, la página que estás buscando no existe.
            </p>
            <Link
              to="/product"
              className="inline-block px-6 py-2 text-white bg-green-700 rounded hover:bg-green-800 transition"
            >
              Volver a Productos
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;

