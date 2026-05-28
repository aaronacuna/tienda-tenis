import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCarrito();

  return (
    <nav style={{
      background: '#2e7d32',
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '24px' }}>🎾</span>
        <span style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          letterSpacing: '0.5px',
        }}>
          TeniShop
        </span>
      </div>

      {/* Carrito */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white',
        cursor: 'pointer',
      }}>
        <span style={{ fontSize: '24px' }}>🛒</span>
        {totalItems > 0 && (
          <span style={{
            background: '#ff5722',
            color: 'white',
            borderRadius: '50%',
            width: '22px',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
          }}>
            {totalItems}
          </span>
        )}
      </div>

    </nav>
  );
};

export default Navbar;