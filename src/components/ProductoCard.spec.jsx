import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProductoCard from "./ProductoCard";

describe("Pruebas Unitarias - Componente ProductoCard (Román)", () => {
  // Datos de prueba estables para simular los flujos de la rúbrica
  const productoDisponible = { id: "1", name: "Guitarra Fender Stratocaster", category: "Guitarras", price: 799990, stock: 5 };
  const productoCritico = { id: "2", name: "Bajo Ibanez SR300E", category: "Bajos", price: 349990, stock: 2 };
  const productoAgotado = { id: "3", name: "Batería Pearl Export", category: "Percusión", price: 990000, stock: 0 };

  // Prueba 1: Renderizado básico (Criterio: Renderizado correcto)
  it("Prueba 1: renderiza correctamente el nombre del instrumento recibido por props", () => {
    render(
      <BrowserRouter>
        <ProductoCard producto={productoDisponible} onAgregar={vi.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText("Guitarra Fender Stratocaster")).toBeInTheDocument();
  });

  // Prueba 2: Props de texto (Criterio: Propiedades recibidas)
  it("Prueba 2: muestra la categoría correcta en el badge de la tarjeta", () => {
    render(
      <BrowserRouter>
        <ProductoCard producto={productoDisponible} onAgregar={vi.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText("Guitarras")).toBeInTheDocument();
  });

  // Prueba 3: Renderizado Condicional - Stock bajo (Criterio: Casos límite)
  it("Prueba 3: muestra el aviso de '¡Últimas unidades!' cuando el stock es menor o igual a 3", () => {
    render(
      <BrowserRouter>
        <ProductoCard producto={productoCritico} onAgregar={vi.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText(/últimas unidades/i)).toBeInTheDocument();
  });

  // Prueba 4: Renderizado Condicional - Stock cero (Criterio: Control del DOM)
  it("Prueba 4: deshabilita el botón e indica 'Agotado' si el stock disponible es cero", () => {
    render(
      <BrowserRouter>
        <ProductoCard producto={productoAgotado} onAgregar={vi.fn()} />
      </BrowserRouter>
    );
    const botonAgotado = screen.getByRole("button", { name: /agotado/i });
    expect(botonAgotado).toBeDisabled();
  });

  // Prueba 5: Simulación de Eventos - Interacción (Criterio: Simulación de Eventos de usuario)
  it("Prueba 5: ejecuta la función onAgregar con sus argumentos correctos al presionar el botón", async () => {
    const usuario = userEvent.setup();
    const funcionEspia = vi.fn(); // Mock / función falsa controlada por Vitest

    render(
      <BrowserRouter>
        <ProductoCard producto={productoDisponible} onAgregar={funcionEspia} />
      </BrowserRouter>
    );

    const botonAgregar = screen.getByRole("button", { name: /agregar al carrito/i });
    await usuario.click(botonAgregar);

    // Comprueba de forma estricta que se llamó a la función pasándole el objeto correspondiente
    expect(funcionEspia).toHaveBeenCalledWith(productoDisponible);
  });
});
