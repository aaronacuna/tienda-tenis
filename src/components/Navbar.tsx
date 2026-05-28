import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCarrito();

  return (
    <nav className="bg-green-700 px-8 h-16 flex items-center justify-between sticky top-0 z-50 shadow-md">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        <span className="text-2xl">🎾</span>
        <span className="text-white font-bold text-xl tracking-wide">
          TeniShop
        </span>
      </Link>

      {/* Carrito */}
      <Link to="/carrito" className="flex items-center gap-2 cursor-pointer">
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        )}
      </Link>

    </nav>
  );
};

export default Navbar;