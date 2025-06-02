import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiSignOut } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";


import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Sidebar = () => {
    return (
        <>
            <aside id="default-sidebar" className="hidden lg:fixed lg:top-0 lg:left-0 lg:z-40 lg:w-55 lg:h-screen lg:transition-transform lg:block" aria-label="Sidebar">
                <div className="h-full px-2 py-3 overflow-hidden bg-[var(--createdMustard)]">
                    <ul className="space-y-1 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-1  rounded-lg  ">
                                <img src="/src/assets/images/logo.png" alt="Logo" className="w-45 rounded-sm" />
                            </a>
                        </li>
                        <li>
                            <a href="/offert" className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)] ">
                                <MdOutlineLocalOffer />
                                <span className="flex-1 ms-3 whitespace-nowrap"> Offers</span>
                            </a>
                        </li>
                        <li>
                            <a href="/featured" className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <AiOutlineLike />
                                <span className="flex-1 ms-3 whitespace-nowrap">Featured Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="/product" className="flex items-center p-2 rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <AiOutlineProduct />
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="/cart" className="flex items-center p-2  rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <BsCartCheck />
                                <span className="flex-1 ms-3 whitespace-nowrap">E-commerce</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <CgProfile />
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <LiaMoneyBillWaveSolid />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sell</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg dark:text-black hover:bg-[var(--createdlightYellow)]  ">
                                <PiSignOut />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <Navbar />


        </>
    )
}

export default Sidebar





