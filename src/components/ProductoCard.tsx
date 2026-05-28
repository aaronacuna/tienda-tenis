import React from 'react';
import { Producto } from '../types';
import { useCarrito } from '../context/CarritoContext';

interface Props {
  producto: Producto;
}

const ProductoCard: React.FC<Props> = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <span style={{
        fontSize: '12px',
        color: '#888',
        textTransform: 'uppercase',
      }}>
        {producto.categoria}
      </span>
      <h3 style={{ margin: 0, fontSize: '16px' }}>{producto.nombre}</h3>
      <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
        {producto.descripcion}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          ${producto.precio}
        </span>
        <button
          onClick={() => agregarAlCarrito(producto)}
          style={{
            background: '#2e7d32',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;