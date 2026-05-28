import React, { createContext, useContext, useState } from 'react';
import { Producto } from '../types';

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface CarritoContextType {
  items: ItemCarrito[];
  agregarAlCarrito: (producto: Producto) => void;
  totalItems: number;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ItemCarrito[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setItems((prev) => {
      const existente = prev.find((item) => item.producto.id === producto.id);
      if (existente) {
        // Si ya está en el carrito, aumenta la cantidad
        return prev.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      // Si no está, lo agrega
      return [...prev, { producto, cantidad: 1 }];
    });
  };

  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ items, agregarAlCarrito, totalItems }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  return context;
};