import { Producto } from '../types';

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Raqueta Wilson Pro Staff 97',
    precio: 250,
    categoria: 'raquetas',
    descripcion: 'Raqueta profesional usada por Roger Federer. Control y precisión excepcionales.',
    imagen: 'https://placehold.co/300x300?text=Wilson+Pro+Staff',
    stock: 5,
  },
  {
    id: 2,
    nombre: 'Raqueta Babolat Pure Drive',
    precio: 220,
    categoria: 'raquetas',
    descripcion: 'La raqueta de Rafael Nadal. Potencia y spin incomparables.',
    imagen: 'https://placehold.co/300x300?text=Babolat+Pure+Drive',
    stock: 8,
  },
  {
    id: 3,
    nombre: 'Zapatillas Nike Air Zoom Vapor',
    precio: 130,
    categoria: 'calzado',
    descripcion: 'Zapatillas ligeras con excelente agarre para canchas duras.',
    imagen: 'https://placehold.co/300x300?text=Nike+Vapor',
    stock: 12,
  },
  {
    id: 4,
    nombre: 'Camiseta Adidas Club',
    precio: 45,
    categoria: 'ropa',
    descripcion: 'Camiseta técnica con tecnología de absorción de humedad.',
    imagen: 'https://placehold.co/300x300?text=Adidas+Club',
    stock: 20,
  },
  {
    id: 5,
    nombre: 'Pelotas Wilson Championship x3',
    precio: 8,
    categoria: 'accesorios',
    descripcion: 'Pelotas de entrenamiento para canchas duras. Pack de 3.',
    imagen: 'https://placehold.co/300x300?text=Wilson+Balls',
    stock: 50,
  },
];