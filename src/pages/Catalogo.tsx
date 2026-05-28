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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
      
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>
        🎾 Tienda de Tenis
      </h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '32px' }}>
        Todo para tu juego
      </p>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: '100%',
          padding: '10px 16px',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '24px',
          boxSizing: 'border-box',
        }}
      />

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaActiva(categoria)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #2e7d32',
              background: categoriaActiva === categoria ? '#2e7d32' : 'white',
              color: categoriaActiva === categoria ? 'white' : '#2e7d32',
              cursor: 'pointer',
              fontWeight: categoriaActiva === categoria ? 'bold' : 'normal',
              textTransform: 'capitalize',
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Contador */}
      <p style={{ color: '#888', marginBottom: '24px', fontSize: '14px' }}>
        Mostrando {productosFiltrados.length} producto
        {productosFiltrados.length !== 1 ? 's' : ''}
      </p>

      {/* Grid de productos */}
      {productosFiltrados.length > 0 ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
        }}>
          {productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '48px' }}>
          No se encontraron productos.
        </p>
      )}

    </div>
  );
};

export default Catalogo;