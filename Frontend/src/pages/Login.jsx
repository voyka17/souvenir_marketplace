import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImage from '../assets/images/main.jpg'; // Ajusta la ruta según tu estructura
import Footer from '../components/layout/Footer.jsx';

const URL_SERVER = 'http://localhost:5000/users';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch(URL_SERVER);
      const users = await res.json();
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );

      if (user) {
        setMessage(`Bienvenid@, ${user.name}`);
      } else {
        setMessage('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error al conectar con el servidor');
    }
  };

  return (
    <>       
    <div className="min-h-screen flex">
      
      {/* Lado izquierdo (30%) */}
      <div className="w-[30%] bg-transparent hidden md:flex items-center justify-center">
        <img
          src={loginImage}
          alt="Imagen de souvenir"
          className="object-cover h-100% w-50%"
        />
      </div>

      {/* Lado derecho (70%) */}
      <div className="w-full md:w-[70%] flex items-center justify-center bg-sandybrown-600 px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-sandybrown-400 p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-xl font-bold mb-6 text-center text-gray-800">
            Iniciar Sesión
          </h1>
       
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
         
          <button type="submit" class="text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Iniciar Sesión
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">{message}</p>
          )}

          <div className="mt-6 text-center">
            <p>
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Crear cuenta
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LoginPage;
