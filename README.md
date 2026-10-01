# 🎸 Sonido Vivo - Tienda de Instrumentos Musicales


📂 Estructura del Proyecto
El código fuente está organizado bajo la carpeta src/ aplicando el principio de responsabilidad única (Single Responsibility):

sonido-vivo-react/
├── public/                 # Archivos estáticos y favicon
├── src/
│   ├── assets/             # Imágenes de productos y logos de Sonido Vivo
│   ├── components/         # Componentes reutilizables (Navbar, Footer, ProductCard, etc.)
│   ├── pages/              # Vistas principales de la app (Home, Products, Cart, Admin, etc.)
│   ├── data/               # Arreglos estáticos con información de prueba inicial
│   │   └── productsData.js # Catálogo base de instrumentos
│   ├── services/           # Lógica de persisetncia y funciones CRUD
│   │   └── storageService.js # Métodos para leer/escribir en LocalStorage
│   ├── tests/              # Pruebas unitarias con Jasmine / Karma
│   ├── App.jsx             # Configuración principal de Rutas (React Router)
│   ├── main.jsx            # Punto de entrada principal e importación de Bootstrap
│   └── index.css           # Estilos globales personalizados
├── package.json
└── README.md


📜 Detalle de Archivos y Código Implementado
A continuación se detalla la lógica inicial que ya se encuentra creada en el repositorio:


1. src/main.jsx
Carga global de los estilos CSS y JavaScript interactivo de Bootstrap:

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)


2. src/data/productsData.js
Arreglo inicial con productos de muestra de Sonido Vivo para poblar la vista del catálogo:

export const initialProducts = [
  {
    id: '1',
    name: 'Guitarra Eléctrica Fender Player Stratocaster',
    category: 'Guitarras',
    price: 799990,
    description: 'Guitarra eléctrica icónica con tres cápsulas single-coil y cuerpo de aliso.',
    image: '[https://via.placeholder.com/300x200?text=Fender+Stratocaster](https://via.placeholder.com/300x200?text=Fender+Stratocaster)',
    isOffer: false,
    stock: 5
  },
  {
    id: '2',
    name: 'Bajo Eléctrico Ibanez SR300E',
    category: 'Bajos',
    price: 349990,
    description: 'Bajo de 4 cuerdas con electrónica activa y mástil ultrarrápido.',
    image: '[https://via.placeholder.com/300x200?text=Ibanez+SR300E](https://via.placeholder.com/300x200?text=Ibanez+SR300E)',
    isOffer: true,
    offerPrice: 299990,
    stock: 3
  },
  // ... más productos
];


3. src/services/storageService.js
Servicio encargado de abstraer la comunicación con localStorage (CRUD simulado):

import { initialProducts } from '../data/productsData';

const PRODUCTS_KEY = 'sonido_vivo_products';

export const getProducts = () => {
  const data = localStorage.getItem(PRODUCTS_KEY);
  if (!data) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  return JSON.parse(data);
};

export const saveProducts = (products) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};


4. src/App.jsx
Sistema de enrutamiento base configurado con BrowserRouter:

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación de Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Sonido Vivo</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/products">Productos</Link>
          </div>
        </div>
      </nav>

      {/* Rutas principales */}
      <main className="py-4">
        <Routes>
          <Route element="{<Home" path="/"/>} />
          <Route element="{<Products" path="/products"/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}




🌿 Flujo de Trabajo con Git y Ramas (Buenas Prácticas)
Para evitar sobrescribir el trabajo de otros compañeros y mantener un historial limpio en GitHub:

Antes de empezar a programar, asegúrate de sincronizar la rama main:
Bash
git checkout main
git pull origin main

Crea una nueva rama para la tarea específica que vas a realizar:
Bash
git checkout -b feature/nombre-de-tu-funcionalidad
# Ejemplos: feature/navbar-footer, feature/catalogo-productos, feature/carrito

Realiza commits pequeños y descriptivos:
Bash
git add .
git commit -m "feat: agregada tarjeta de producto con boton de carrito"

Sube tu rama a GitHub:
Bash
git push origin feature/nombre-de-tu-funcionalidad