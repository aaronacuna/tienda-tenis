import React, { useState } from 'react';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { Producto } from '../types';

type Categoria = 'todos' | 'raquetas' | 'ropa' | 'calzado' | 'accesorios';

const categorias: Categoria[] = ['todos', 'raquetas', 'ropa', 'calzado', 'accesorios'];

const Catalogo: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('todos');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto: Producto) => {
    const coincideCategoria =
      categoriaActiva === 'todos' || producto.categoria === categoriaActiva;
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        🎾 Tienda de Tenis
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Todo para tu juego
      </p>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-6 text-base focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap mb-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaActiva(categoria)}
            className={`px-4 py-2 rounded-full border font-medium text-sm capitalize transition-colors cursor-pointer ${
              categoriaActiva === categoria
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-green-700 border-green-700 hover:bg-green-50'
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Contador */}
      <p className="text-sm text-gray-400 mb-6">
        Mostrando {productosFiltrados.length} producto
        {productosFiltrados.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      {productosFiltrados.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-16 text-lg">
          No se encontraron productos.
        </p>
      )}

    </div>
  );
};

export default Catalogo;