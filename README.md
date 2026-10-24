# Revisión
En general:     Determinar dónde se ubica la lógica de funcionamiento de una página. Si esa lógica es parte de cada componente para una modularidad mayor, o en la página para una flexibilidad de funcionamiento mayor.
                Que se reutilicen las funciones de persistencia.js para el guardado y lectura de datos.


Blog:           Mover componentes que están en páginas.
                Testear renderizado.
Productos:      Falta modularizar el menú desplegable.
                El menú desplegable no aparece.
                Al presionar un producto, se agrega al carro pero no hay aviso visual deque ocurrió. Tampoco se puede elegir la cantidad antes de ir al carro.
                Considerar que agregar algo ocurra en detalle de producto.
Carrito:        Separar la lógica en componentes y reparar el link a Productos. Estudiar la posiblidad de que el carrito se despliegue a la derecha.
                Validaciones de carrito.
Checkout:       Sacar las validaciones de la página.
                Validaciones de compra.
                Modularizar la lógica de la página en componentes.
                Reutilizar guardado de elementos.
                Que el formulario de cliente reutilice componentes de 'form'.
                Que el checkout guarde la venta exitosa, pero también la el pago error.
Nosotros:       Crear componente tarjeta, sacar los datos de la página.
                Validaciones de renderizado.
Admin:          Mover los componentes a componentes.
                Sacar los datos del dashboard y modularizar componentes, como las tarjetas.
                Que las tarjetas sean funcionales, rescatando y procesando mediante funciones la información de las colecciones.
                


# 🎸 Sonido Vivo - Tienda de Instrumentos Musicales (SPA)

Aplicación web interactiva desarrollada en **React** con **Bootstrap** y pruebas unitarias con **Vitest** para la **Evaluación 2** en Duoc UC.

---

## 📋 Resumen de Cumplimiento de la Rúbrica
1. **Componentes y Responsabilidad Única:** Estructuras migradas a componentes reutilizables en `src/components/` y `src/pages/`.
2. **CRUD y Datos:** Catálogo en `productosData.js` con manipulación inmutable de estados.
3. **Persistencia:** Sincronización bidireccional con `localStorage` mediante Hooks (`useEffect`).
4. **Diseño Responsivo:** Interfaz adaptable usando la grilla de Bootstrap.
5. **Interactividad y Rutas:** Enrutamiento con `react-router-dom`, filtros de búsqueda y formularios controlados.

---

## 📂 Estructura del Proyecto
```text
sonido-vivo-react/
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── data/               # Datos simulados (productosData.js)
│   ├── pages/              # Vistas de la SPA
│   ├── utils/              # Funciones auxiliares
│   └── App.jsx             # Orquestador principal
└── README.md
```

---

## 🧪 Testing y Cobertura (Vitest)
Suite con 10 pruebas unitarias que cubren utilidades, componentes y flujos de interfaz, alcanzando un **94.73% de cobertura en sentencias**.

```bash
npm install         # Instalar dependencias
npm run dev         # Servidor de desarrollo
npm run test:run    # Ejecutar pruebas
npm run coverage    # Ver cobertura
```

*Nota: Para revisar el contenido detallado completo del README incluyendo la estructura de archivos extendida, los comandos y el equipo de desarrollo, puedes consultar los documentos de referencia.*
