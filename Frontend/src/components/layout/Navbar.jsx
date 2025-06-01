import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import Footer from './Footer';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <nav className="bg-[var(--createdBrown)] px-4 md:px-8 py-4 shadow lg:ml-[220px]">
                <div className="flex items-center justify-between">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none"
                        aria-controls="menu"
                        aria-expanded={isOpen}
                    >
                        <IoMenu size={28} />
                    </button>

                    {/* Menú para pantallas grandes (siempre visible) */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <ul className="flex flex-col md:flex-row">
                            {['Offers', 'Featured Products', 'Products', 'E-commerce', 'Profile', 'Sell', 'Sign Up'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-white hover:bg-yellow-500 rounded md:hover:bg-transparent md:hover:text-yellow-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Menú para pantallas pequeñas (controlado con isOpen) */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="flex flex-col">
                            {['Offers', 'Featured Products', 'Products', 'E-commerce', 'Profile', 'Sell', 'Sign Up'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-white hover:bg-yellow-500 rounded"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>


                    </div>
                )}


            </nav>

            <img
                src="/src/assets/images/bannerMovil.png"
                alt="Banner versión móvil"
                className="mt- block md:hidden w-full"
            />







        </>
    );
};

export default Navbar;
