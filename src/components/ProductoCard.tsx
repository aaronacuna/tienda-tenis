import React from 'react';
import { Producto } from '../types';
import { useCarrito } from '../context/CarritoContext';

interface Props {
  producto: Producto;
}

const ProductoCard: React.FC<Props> = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="border border-gray-200 rounded-xl p-4 w-64 flex flex-col gap-3 hover:shadow-lg transition-shadow">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full rounded-lg"
      />
      <span className="text-xs text-gray-400 uppercase tracking-wide">
        {producto.categoria}
      </span>
      <h3 className="font-semibold text-gray-800 text-base">
        {producto.nombre}
      </h3>
      <p className="text-sm text-gray-500 flex-1">
        {producto.descripcion}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold text-gray-900">
          ${producto.precio}
        </span>
        <button
          onClick={() => agregarAlCarrito(producto)}
          className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;