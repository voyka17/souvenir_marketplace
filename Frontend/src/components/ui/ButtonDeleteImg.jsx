import React from 'react';
const ButtonDeleteImg = ({ onClick }) => {
  return (
    <button
      type="button"
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4"
      onClick={onClick}
    >
      Eliminar 
    </button>
  );
};

export default ButtonDeleteImg;