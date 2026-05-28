import React from 'react';
import { productos } from './data/productos';
import ProductoCard from './components/ProductoCard';

function App() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 16px',
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>
        🎾 Tienda de Tenis
      </h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '32px' }}>
        Todo para tu juego
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
      }}>
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default App;
