import { vi } from "vitest";
import { guardarFormulario, obtenerRegistro } from "./persistencia";

describe("guardarFormulario", () => {
  it("Crea un arreglo nuevo y guarda el registro cuando localStorage está vacío", () => {
    const espiaGet = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    const espiaSet = vi.spyOn(Storage.prototype, "setItem");

    const nuevoUsuario = { nombre: "Ferrari", email: "ferrari@duoc.cl" };

    guardarFormulario("usuarios", nuevoUsuario);

    expect(espiaGet).toHaveBeenCalledWith("usuarios");
    expect(espiaSet).toHaveBeenCalledWith(
      "usuarios",
      JSON.stringify([nuevoUsuario])
    );

    espiaGet.mockRestore();
    espiaSet.mockRestore();
  });

  it("Mantiene los datos previos y agrega el nuevo registro al final del arreglo", () => {
    const usuario = [{ nombre: "Ana", email: "ana@duoc.cl" }];
    const espiaGet = vi
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(usuario));
    const espiaSet = vi.spyOn(Storage.prototype, "setItem");

    const nuevoUsuario = { nombre: "Ferrari", email: "ferrari@duoc.cl" };

    guardarFormulario("usuarios", nuevoUsuario);

    expect(espiaGet).toHaveBeenCalledWith("usuarios");
    expect(espiaSet).toHaveBeenCalledWith(
      "usuarios",
      JSON.stringify([...usuario, nuevoUsuario])
    );

    espiaGet.mockRestore();
    espiaSet.mockRestore();
  });
});

describe("obtenerRegistro", () => {
    it("Lee los datos y los retorna como un arreglo", () => {
        const datos = [{ nombre: "Ferrari", email: "ferrari@duoc.cl"}];
        const espia = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(JSON.stringify(datos));
        
        const resultado = obtenerRegistro("usuarios");

        expect(espia).toHaveBeenCalledWith("usuarios");
        expect(resultado).toEqual(datos);

        espia.mockRestore()
    });
    it("Retorna un arreglo vacío al no encontrar clave", () => {
        const espia = vi.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
        const resultado = obtenerRegistro("usuarios");

        expect(espia).toHaveBeenCalledWith("usuarios");
        expect(resultado).toEqual([]);

        espia.mockRestore()
    });
});