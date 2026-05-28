# TeniShop — Contexto del Proyecto

## ¿Qué es este proyecto?
Tienda virtual de artículos de tenis construida con React y TypeScript.
Proyecto de aprendizaje para practicar desarrollo web moderno con Claude.

## Stack tecnológico
- React 18 con TypeScript
- Tailwind CSS para estilos
- React Router v6 para navegación
- Context API para estado global

## Estructura del proyecto
- `src/components/` — piezas reutilizables (Navbar, ProductoCard)
- `src/pages/` — páginas completas (Catalogo, Carrito)
- `src/context/` — estado global (CarritoContext)
- `src/data/` — productos de prueba
- `src/types/` — definiciones de TypeScript

## Convenciones
- Nombres de componentes en PascalCase (ej: `ProductoCard.tsx`)
- Comentarios en español
- Un componente por archivo
- Clases de Tailwind en lugar de estilos inline

## Rutas disponibles
- `/` — Catálogo con filtros y buscador
- `/carrito` — Página del carrito con total

## Lo que vende la tienda
- Raquetas
- Ropa deportiva
- Calzado
- Accesorios (pelotas, overgrips, bolsos)

## Estado actual
- Catálogo funcional con filtros por categoría y buscador
- Carrito funcional con Context global
- Navegación entre páginas con React Router