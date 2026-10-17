# 🎸 Sonido Vivo - Tienda de Instrumentos Musicales

Aplicación web interactiva para la tienda de música **Sonido Vivo**, desarrollada en **React** con **Bootstrap** y una suite completa de pruebas unitarias automatizadas con **Vitest**. Proyecto desarrollado para la Evaluación 2 de Desarrollo FullStack II en Duoc UC.

---

## 📂 Estructura del Proyecto
El código fuente está organizado bajo la carpeta `src/` aplicando principios de modularidad y responsabilidad única:

sonido-vivo-react/
├── public/                 # Archivos estáticos y favicon
├── src/
│   ├── assets/             # Imágenes reales de productos (.jpg) y logos
│   ├── components/         # Componentes atómicos reutilizables (Navbar, Footer, ProductoCard, etc.)
│   ├── pages/              # Vistas de la aplicación (Inicio, Productos, Carrito, Checkout, Pago)
│   ├── data/               # Colecciones de datos de prueba iniciales (productosData.js)
│   ├── test/               # Archivo de configuración global de testing (setup.js)
│   ├── utils/              # Funciones puras aisladas (precio.js, persistencia.js)
│   ├── App.jsx             # Orquestador central de rutas (React Router)
│   └── main.jsx            # Punto de entrada de la aplicación e inyección de estilos
├── package.json
└── README.md

---

## 📜 Código Fuente e Implementación Principal

### 1. src/main.jsx
Envoltura del enrutador global y carga de los estilos responsivos de Bootstrap:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

### 2. src/data/productosData.js
Arreglo dinámico centralizado con la importación nativa de imágenes locales de instrumentos:

```javascript
import imgFender from "../assets/guitarra.jpg";
import imgIbanez from "../assets/bajo.jpg";
import imgYamaha from "../assets/teclado.jpg";
import imgPearl from "../assets/bateria.jpg";

export const initialProducts = [
  {
    id: '1',
    name: 'Guitarra Eléctrica Fender Player Stratocaster',
    category: 'Guitarras',
    price: 799990,
    description: 'Guitarra eléctrica icónica con tres cápsulas single-coil y cuerpo de aliso.',
    image: imgFender,
    isOffer: false,
    stock: 5
  },
  {
    id: '2',
    name: 'Bajo Eléctrico Ibanez SR300E',
    category: 'Bajos',
    price: 349990,
    description: 'Bajo de 4 cuerdas con electrónica activa y mástil ultrarrápido.',
    image: imgIbanez,
    isOffer: true,
    offerPrice: 299990,
    stock: 3
  }
];
```

### 3. src/utils/persistencia.js
Módulos reutilizables encargados de la persistencia de datos serializados en el navegador:

```javascript
export function guardarCarritoLocalStorage(datos) {
  localStorage.setItem(
    "carrito_productos",
    JSON.stringify(datos)
  );
}

export function guardarFormulario(registro, nuevo) {
  const registroExistente = localStorage.getItem(registro);
  const lista = registroExistente ? JSON.parse(registroExistente) : [];
  lista.push(nuevo);
  localStorage.setItem(registro, JSON.stringify(lista));
}
```

### 4. src/App.jsx
Mapeo de rutas públicas de comercio electrónico y pasarela de pagos integradas con los formularios controlados:

```jsx
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialProducts } from './data/productosData';
import { guardarCarritoLocalStorage } from "./utils/persistencia";
import Navegacion from "./components/Navegacion";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito"; 
import Checkout from "./pages/Checkout";
import PagoExitoso from "./pages/PagoExitoso";
import PagoError from "./pages/PagoError";
import PiePagina from "./components/PiePagina";

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardados = localStorage.getItem("carrito_productos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    guardarCarritoLocalStorage(carrito);
  }, [carrito]);

  function agregarProducto(producto) {
    const yaExiste = carrito.some((item) => item.id === producto.id);
    if (yaExiste) return;
    setCarrito([...carrito, producto]);
  }

  function eliminarProducto(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  function limpiarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Navegacion />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos productos={initialProducts} onAgregar={agregarProducto} />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito productosCarrito={carrito} onEliminar={eliminarProducto} />} />
          <Route path="/checkout" element={<Checkout vaciarCarrito={limpiarCarrito} />} />
          <Route path="/pago-exitoso" element={<PagoExitoso />} />
          <Route path="/pago-error" element={<PagoError />} />
        </Routes>
      </main>
      <PiePagina />
    </>
  );
}

export default App;
```

---

## 🧪 Comandos de Control de Calidad e Infraestructura

Para levantar el entorno local, compilar o ejecutar el análisis de testing automatizado, ejecute los siguientes scripts en su terminal:

* **Iniciar Servidor Local:**
  ```bash
  npm run dev
  ```
* **Ejecutar Suite de 10 Pruebas Unitarias:**
  ```bash
  npm run test:run
  ```
* **Calcular Porcentaje Estadístico de Cobertura (V8 Engine):**
  ```bash
  npm run coverage
  ```
* **Compilar Build de Producción para Despliegue:**
  ```bash
  npm run build
  ```

---

## 🌿 Flujo de Trabajo Operativo con Git (Buenas Prácticas)
Para mantener un historial seguro en el desarrollo colaborativo del equipo:

1. Sincronizar la rama base común:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Crear un entorno de trabajo aislado:
   ```bash
   git switch -c feature/nombre-de-tu-funcionalidad
   ```
3. Registrar hitos atómicos:
   ```bash
   git add .
   git commit -m "feat: implementar componente interactivo con estado"
   ```
4. Respaldar progreso en el servidor:
   ```bash
   git push origin feature/nombre-de-tu-funcionalidad
   ```
