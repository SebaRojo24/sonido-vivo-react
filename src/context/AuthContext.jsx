import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const usuarioGuardado = sessionStorage.getItem("usuario");
    const tokenGuardado = sessionStorage.getItem("token");

    if (usuarioGuardado && tokenGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
    setCargando(false);
  }, []);

  const login = (datosUsuario, token) => {
    setUsuario(datosUsuario);
    sessionStorage.setItem("usuario", JSON.stringify(datosUsuario));
    sessionStorage.setItem("token", token);
  };

  const logout = () => {
    setUsuario(null);
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};