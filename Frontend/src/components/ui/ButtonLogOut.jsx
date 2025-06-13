import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonLogOut = () => {
    const navigate = useNavigate();    
    const handleLogout = () => {    
    localStorage.removeItem('usuario');    
    navigate('/product');
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-[var(--createdMustard))] hover:bg-[var(--createdlightYellow)] active:bg-[var(--createdOrange)] 
            px-3 py-2 text-xs 
            sm:px-4 sm:py-2 sm:text-sm  
            md:px-15 md:py-3 md:text-base md:w-[210px]  
            lg:text-lg lg:w-[220px]      
            xl:text-xl xl:w-[240px]      
            rounded-lg 
            flex items-center justify-center 
            text-white 
            transition-all duration-300 ease-in-out"
    >
      Cerrar sesión
    </button>
  );
}

export default ButtonLogOut;