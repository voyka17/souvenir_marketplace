import React from 'react';
import Sidebar from '../components/layout/Sidebar.jsx';
import Footer from '../components/layout/Footer.jsx';
import ButtonSave from '../components/ui/ButtonSave.jsx'

const Profile = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Sidebar />

            <main className="flex-1 bg-[#f9e5bb] ml-0 lg:ml-[220px] transition-all duration-300">
                <div className="max-w-4xl mx-auto bg-[var(--createdlightYellow)] rounded-lg shadow-lg p-6 flex gap-6">

                    {/* Sección de avatar y nombre */}
                    <div className="flex flex-col items-center w-1/3">
                        <img
                            src="#"
                            className="w-32 h-30 rounded-full border-4 border-yellow-800 bg-white mb-4"
                        />
                        <h2 className="text-2xl font-bold text-[#3d2f1d]">Nombre del usuario</h2>
                    </div>



                    {/* Sección del formulario */}
                    <div className="w-2/3 space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Nombre</label>
                            <input
                                type="text"
                                value="María González"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#fff8e7]"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                value="maria@example.com"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#fff8e7]"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700">País</label>
                            <input
                                type="text"
                                value="Ingrese su Pais"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#fff8e7]"

                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Teléfono</label>
                            <input
                                type="tel"
                                value="Ingrese su teléfono"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#fff8e7]"

                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Dirección</label>
                            <input
                                type="text"
                                value="Ingrese su direccion"
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-[#fff8e7]"

                            />
                        </div>

                        <div>
                            <ButtonSave />
                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Profile;
