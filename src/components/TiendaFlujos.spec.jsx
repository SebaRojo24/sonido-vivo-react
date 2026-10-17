import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom"; // Enrutador oficial
import Productos from "../pages/Productos";
import DetalleProducto from "../pages/DetalleProducto";
import { guardarCarritoLocalStorage } from "../utils/persistencia";

describe("Pruebas Unitarias Avanzadas - Flujos de Tienda (Román)", () => {
  const mockProductos = [
    { id: "1", name: "Guitarra Eléctrica", category: "Guitarras", price: 50000, stock: 5 },
    { id: "2", name: "Bajo Eléctrico", category: "Bajos", price: 60000, stock: 3 }
  ];

  // Prueba 8: Gestión del Estado y Filtros (Guía 14 - Plan N° 8) Envuelta con Router
  it("Prueba 8: cambia los resultados de la grilla al seleccionar una categoría en el filtro", async () => {
    const usuario = userEvent.setup();
    
    // Corregido: Agregamos BrowserRouter para que los Link de las tarjetas no tiren error
    render(
      <BrowserRouter>
        <Productos productos={mockProductos} onAgregar={vi.fn()} />
      </BrowserRouter>
    );

    // Por defecto se muestran ambos elementos
    expect(screen.getByText("Guitarra Eléctrica")).toBeInTheDocument();
    expect(screen.getByText("Bajo Eléctrico")).toBeInTheDocument();

    // Simula que el usuario interactúa con el select interactivo cambiándolo a "Bajos"
    const selector = screen.getByRole("combobox");
    await usuario.selectOptions(selector, "Bajos Eléctricos");

    // Verifica que se aplicó el renderizado condicional del filtro
    expect(screen.queryByText("Guitarra Eléctrica")).not.toBeInTheDocument();
    expect(screen.getByText("Bajos Eléctricos")).toBeInTheDocument();
  });

  // Prueba 9: Espía de Persistencia Aislada (Guía 14 - Sección 6 Oficial)
  it("Prueba 9: sincroniza y escribe el formato serializado correcto en localStorage mediante un espía", () => {
    const espiaItem = vi.spyOn(Storage.prototype, "setItem");
    const datosSimulados = [{ id: "1", name: "Guitarra Eléctrica" }];

    // Ejecuta la función lógica de persistencia
    guardarCarritoLocalStorage(datosSimulados);

    // El espía verifica que se llamó al método nativo con la clave y el JSON correspondientes
    expect(espiaItem).toHaveBeenCalledWith(
      "carrito_productos",
      JSON.stringify(datosSimulados)
    );

    espiaItem.mockRestore(); // Remueve el espía para limpiar el entorno
  });

  // Prueba 10: Control de Errores y rutas controladas (Guía 14 - Plan N° 10)
  it("Prueba 10: muestra de forma segura una alerta controlada si el instrumento solicitado no existe", () => {
    render(
      <BrowserRouter>
        <DetalleProducto />
      </BrowserRouter>
    );
    // Al no proveer un ID válido a través del Router en la prueba, salta el mensaje de control
    expect(screen.getByText(/el instrumento solicitado no existe/i)).toBeInTheDocument();
  });
});
