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
