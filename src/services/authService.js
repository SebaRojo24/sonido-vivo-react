const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Servicio para iniciar sesión
export const loginUser = async (credenciales) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credenciales), // credenciales = { email, password }
    });

    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }

    const data = await response.json();
    return data; // Esperamos que el backend devuelva { usuario, token }
  } catch (error) {
    console.error("Error en el servicio de login:", error);
    throw error;
  }
};

// Servicio para registrar usuario
export const registerUser = async (datosUsuario) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });

    if (!response.ok) {
      throw new Error("Error al registrar el usuario");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el servicio de registro:", error);
    throw error;
  }
};