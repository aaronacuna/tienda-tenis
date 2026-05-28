import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const Carrito: React.FC = () => {
  const { items, totalItems } = useCarrito();

  const total = items.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-400 text-lg mb-4">Tu carrito está vacío</p>
        <Link
          to="/"
          className="bg-green-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-800 transition-colors"
        >
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        🛒 Tu Carrito
      </h1>

      <div className="flex flex-col gap-4 mb-8">
        {items.map((item) => (
          <div
            key={item.producto.id}
            className="flex items-center gap-4 border border-gray-200 rounded-xl p-4"
          >
            <img
              src={item.producto.imagen}
              alt={item.producto.nombre}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {item.producto.nombre}
              </h3>
              <p className="text-sm text-gray-400 capitalize">
                {item.producto.categoria}
              </p>
              <p className="text-green-700 font-bold mt-1">
                ${item.producto.precio}
              </p>
            </div>
            <div className="text-gray-600 font-medium">
              x{item.cantidad}
            </div>
            <div className="text-gray-800 font-bold w-20 text-right">
              ${item.producto.precio * item.cantidad}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">
            {totalItems} producto{totalItems !== 1 ? 's' : ''}
          </p>
          <p className="text-2xl font-bold text-gray-800">
            Total: ${total}
          </p>
        </div>
        <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-xl transition-colors cursor-pointer">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Carrito;