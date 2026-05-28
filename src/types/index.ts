export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: 'raquetas' | 'ropa' | 'calzado' | 'accesorios';
  descripcion: string;
  imagen: string;
  stock: number;
}