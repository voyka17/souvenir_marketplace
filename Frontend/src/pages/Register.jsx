import React, { useState } from 'react';
import {FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import loginImage from '../assets/images/main.jpg'; // Ajusta la ruta según tu estructura
import Footer from '../components/layout/Footer.jsx';

const URL_SERVER = 'http://localhost:5000/users';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    phone: '',
    address: '',
  });
  const [message, setMessage] = useState('');

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
          ...form,
          rol_id: 'false',
        }),
      });

      if (res.ok) {
        const newUser = await res.json();
        setMessage(`Usuario registrado con éxito: ${newUser.name}`);
        navigate('/login');
      } else {
        setMessage('Error al registrar el usuario');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error al conectar con el servidor');
    }
  };

  return (
    <>
    <div className="min-h-screen flex bg-sandybrown-800">
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
          className="w-full max-w-md bg-transparent p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-l font-bold mb-6 text-center text-gray-800">
            Crear cuenta
          </h1>
          {/* Campo: Nombre */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombres y Apellidos"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Campo: Correo */}
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Campo: Contraseña */}
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Campo: País */}
          <div className="mb-6">
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              País
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="País"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Campo: Teléfono */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Teléfono
            </label>
            <div className="relative">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Teléfono"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaPhone className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Campo: Dirección */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Dirección
            </label>
            <div className="relative">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Dirección"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <FaMapMarkerAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-gray py-2 rounded-md hover:bg-green-700 transition"
          >
            Registrar
          </button>
          <div className="mt-6 text-center">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </div>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}

        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default RegisterPage;

