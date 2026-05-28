import React from 'react';
import { CarritoProvider } from './context/CarritoContext';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';

function App() {
  return (
    <CarritoProvider>
      <Navbar />
      <Catalogo />
    </CarritoProvider>
  );
}

export default App;