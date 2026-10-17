import { validarRegistro } from "./validarRegistro";

const datosValidosBase = {
  nombre: "Juan",
  apellido: "Perez",
  rut: "12345678",
  region: "Metropolitana",
  comuna: "Santiago",
  email: "juan@duoc.cl",
  direccion: "Av Siempre Viva 123",
  contrasenna: "12345",
  categoria: "Informática"
};

describe("validarRegistro()", () => {
  
  /*// 1. CASO ÉXITO GENERAL
  test("Debe retornar un objeto vacío si todos los datos son válidos (usuario normal)", () => {
    const errores = validarRegistro(datosValidosBase, false);
    expect(errores).toEqual({});
  });

  test("Debe retornar un objeto vacío si todos los datos son válidos (administrador con categoría)", () => {
    const errores = validarRegistro(datosValidosBase, true);
    expect(errores).toEqual({});
  });*/

  // 2. VALIDACIONES DE NOMBRE
  describe("Validación de Nombre", () => {
    test("Debe indicar error si el nombre está vacío", () => {
      const datos = { ...datosValidosBase, nombre: "" };
      const errores = validarRegistro(datos);
      expect(errores.nombre).toBe("Nombre obligatorio");
    });

    test("Debe indicar error si el nombre contiene caracteres no permitidos (ej. números)", () => {
      const datos = { ...datosValidosBase, nombre: "Juan123" };
      const errores = validarRegistro(datos);
      expect(errores.nombre).toBe("El nombre solo puede contener letras");
    });

    test("Debe indicar error si el nombre excede los 100 caracteres", () => {
      const datos = { ...datosValidosBase, nombre: "a".repeat(101) };
      const errores = validarRegistro(datos);
      expect(errores.nombre).toBe("El nombre no puede exceder 100 caracteres");
    });
  });

  // 3. VALIDACIONES DE APELLIDO
  describe("Validación de Apellido", () => {
    test("Debe indicar error si el apellido está vacío", () => {
      const datos = { ...datosValidosBase, apellido: "" };
      const errores = validarRegistro(datos);
      expect(errores.apellido).toBe("Apellido obligatorio");
    });

    test("Debe indicar error si el apellido contiene números u otros caracteres", () => {
      const datos = { ...datosValidosBase, apellido: "Perez!" };
      const errores = validarRegistro(datos);
      expect(errores.apellido).toBe("El apellido solo puede contener letras");
    });

    test("Debe indicar error si el apellido excede los 100 caracteres", () => {
      const datos = { ...datosValidosBase, apellido: "a".repeat(101) };
      const errores = validarRegistro(datos);
      expect(errores.apellido).toBe("El apellido no puede exceder 100 caracteres");
    });
  });

  // 4. VALIDACIONES DE RUT
  describe("Validación de RUT", () => {
    test("Debe indicar error si el RUT está vacío", () => {
      const datos = { ...datosValidosBase, rut: "" };
      const errores = validarRegistro(datos);
      expect(errores.rut).toBe("Rut obligatorio");
    });

    test("Debe indicar error si el RUT tiene menos de 7 caracteres", () => {
      const datos = { ...datosValidosBase, rut: "123456" };
      const errores = validarRegistro(datos);
      expect(errores.rut).toBe("El rut debe contener entre 7 y 9 caracteres");
    });

    test("Debe indicar error si el RUT tiene más de 9 caracteres", () => {
      const datos = { ...datosValidosBase, rut: "1234567890" };
      const errores = validarRegistro(datos);
      expect(errores.rut).toBe("El rut debe contener entre 7 y 9 caracteres");
    });

    /*test("Debe indicar error si el formato tiene puntos o guión", () => {
      const datos = { ...datosValidosBase, rut: "12.345.678-9" };
      const errores = validarRegistro(datos);
      expect(errores.rut).toBe("Ingrese RUT sin puntos ni guión");
    });*/

    test("Debe indicar error si el algoritmo de validacionRut retorna falso", () => {
      const datos = { ...datosValidosBase, rut: "11111111" };
      const errores = validarRegistro(datos);
      expect(errores.rut).toBe("Rut inválido");
    });
  });

  // 5. VALIDACIONES DE REGIÓN Y COMUNA
  describe("Validación de Región y Comuna", () => {
    test("Debe indicar error si la región está vacía", () => {
      const datos = { ...datosValidosBase, region: "" };
      const errores = validarRegistro(datos);
      expect(errores.region).toBe("Región obligatoria");
    });

    test("Debe indicar error si la comuna está vacía", () => {
      const datos = { ...datosValidosBase, comuna: "" };
      const errores = validarRegistro(datos);
      expect(errores.comuna).toBe("Comuna obligatoria");
    });
  });

  // 6. VALIDACIONES DE EMAIL
  describe("Validación de Email", () => {
    test("Debe indicar error si el email está vacío", () => {
      const datos = { ...datosValidosBase, email: "" };
      const errores = validarRegistro(datos);
      expect(errores.email).toBe("Email obligatorio");
    });

    test("Debe indicar error si el email no contiene @", () => {
      const datos = { ...datosValidosBase, email: "juanduoc.cl" };
      const errores = validarRegistro(datos);
      expect(errores.email).toBe("El email debe contener un @");
    });

    test("Debe indicar error si el dominio no es permitido", () => {
      const datos = { ...datosValidosBase, email: "juan@hotmail.com" };
      const errores = validarRegistro(datos);
      expect(errores.email).toBe("El email debe ser @gmail.com, @duoc.cl o @profesor.duoc.cl");
    });

    test("Debe ser válido para los distintos dominios permitidos", () => {
      const emailGmail = { ...datosValidosBase, email: "juan@gmail.com" };
      const emailProfesor = { ...datosValidosBase, email: "juan@profesor.duoc.cl" };

      expect(validarRegistro(emailGmail).email).toBeUndefined();
      expect(validarRegistro(emailProfesor).email).toBeUndefined();
    });

    test("Debe indicar error si el email excede los 100 caracteres", () => {
      const emailLargo = "a".repeat(95) + "@duoc.cl";
      const datos = { ...datosValidosBase, email: emailLargo };
      const errores = validarRegistro(datos);
      expect(errores.email).toBe("El email no puede exceder 100 caracteres");
    });
  });

  // 7. VALIDACIONES DE DIRECCIÓN
  describe("Validación de Dirección", () => {
    test("Debe indicar error si la dirección está vacía", () => {
      const datos = { ...datosValidosBase, direccion: "" };
      const errores = validarRegistro(datos);
      expect(errores.direccion).toBe("Dirección obligatoria");
    });

    test("Debe indicar error si contiene caracteres especiales no alfanuméricos", () => {
      const datos = { ...datosValidosBase, direccion: "Calle Falsa #123!" };
      const errores = validarRegistro(datos);
      expect(errores.direccion).toBe("La dirección solo puede contener letras y números");
    });

    test("Debe indicar error si excede los 300 caracteres", () => {
      const datos = { ...datosValidosBase, direccion: "a".repeat(301) };
      const errores = validarRegistro(datos);
      expect(errores.direccion).toBe("La dirección no puede exceder 300 caracteres");
    });
  });

  // 8. VALIDACIONES DE CONTRASEÑA
  describe("Validación de Contraseña", () => {
    test("Debe indicar error si la contraseña está vacía", () => {
      const datos = { ...datosValidosBase, contrasenna: "" };
      const errores = validarRegistro(datos);
      expect(errores.contrasenna).toBe("Contraseña obligatoria");
    });

    test("Debe indicar error si tiene menos de 3 caracteres o más de 10", () => {
      const passCorta = { ...datosValidosBase, contrasenna: "12" };
      const passLarga = { ...datosValidosBase, contrasenna: "12345678901" };

      expect(validarRegistro(passCorta).contrasenna).toBe("La contraseña debe contener entre 4 y 10 caracteres");
      expect(validarRegistro(passLarga).contrasenna).toBe("La contraseña debe contener entre 4 y 10 caracteres");
    });

    test("Debe aceptar contraseñas con longitud adecuada", () => {
      const datos = { ...datosValidosBase, contrasenna: "1234" };
      const errores = validarRegistro(datos);
      expect(errores.contrasenna).toBeUndefined();
    });
  });

  // 9. VALIDACIÓN CONDICIONAL DE CATEGORÍA
  describe("Validación Condicional de Categoría", () => {
    test("NO debe requerir categoría si esAdmin es false y está vacía", () => {
      const datosSinCategoria = { ...datosValidosBase, categoria: "" };
      const errores = validarRegistro(datosSinCategoria, false);
      expect(errores.categoria).toBeUndefined();
    });

    test("SÍ debe exigir categoría si esAdmin es true y está vacía", () => {
      const datosSinCategoria = { ...datosValidosBase, categoria: "" };
      const errores = validarRegistro(datosSinCategoria, true);
      expect(errores.categoria).toBe("Debe seleccionar una categoría");
    });
  });

});