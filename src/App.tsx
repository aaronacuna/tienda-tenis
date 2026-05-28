import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;