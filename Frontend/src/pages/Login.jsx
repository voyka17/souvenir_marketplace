import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/images/main.jpg';
import Footer from '../components/layout/Footer.jsx';
import { UserContext } from '../context/userContext.jsx'; 

const URL_SERVER = 'http://localhost:4001/login';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  try {
    const res = await fetch(URL_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    if (!res.ok) {
      throw new Error('Credenciales inválidas o error en el servidor');
    }

    const user = await res.json();

    setMessage(`Bienvenid@, ${user.name}`);
    login(user);
    navigate('/product');
  } catch (error) {
    console.error(error);
    setMessage('Correo o contraseña incorrectos');
  }
};


  return (
    <>
      <div className="min-h-screen flex">
        {/* Lado izquierdo (30%) */}
        <div className="w-[30%] bg-[#f9e5bb] hidden md:flex items-center justify-center">
          <img
            src={loginImage}
            alt="Imagen de souvenir"
            className="object-cover h-100% w-50%"
          />
        </div>

        {/* Lado derecho (70%) */}
        <div className="w-full md:w-[70%] flex items-center justify-center bg-[#f9e5bb] px-6 py-12">
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
                  className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                  className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

             <button
              type="submit"
              className="bg-[var(--createdMustard)] hover:bg-[var(--createdlightYellow)] active:bg-[var(--createdOrange)] 
                px-4 py-1 text-xs 
                sm:px-5 sm:py-1 sm:text-sm  
                md:px-6 md:py-2 md:text-base md:w-[300px]  
                lg:text-lg lg:w-[350px]      
                xl:text-xl xl:w-[400px]      
                rounded-lg 
                flex items-center justify-center 
                text-white 
                transition-all duration-300 ease-in-out"
            >
              Iniciar Sesión
            </button>



            {message && (
              <p className="mt-4 text-center text-sm text-red-600">
                {message}
              </p>
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
