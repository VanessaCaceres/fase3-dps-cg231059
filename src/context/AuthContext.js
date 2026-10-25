import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Autenticación simulada en memoria (sin backend) para la primera entrega.
export function AuthProvider({ children }) {
  const [users, setUsers] = useState([
    { nombre: "Usuario Demo", email: "demo@correo.com", password: "Demo1234" },
  ]);
  const [user, setUser] = useState(null);

  const register = ({ nombre, email, password }) => {
    const existe = users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (existe) return { ok: false, error: "Este correo ya está registrado." };
    const nuevo = { nombre: nombre.trim(), email: email.trim(), password };
    setUsers([...users, nuevo]);
    setUser({ nombre: nuevo.nombre, email: nuevo.email });
    return { ok: true };
  };

  const login = (email, password) => {
    const encontrado = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!encontrado) return { ok: false, error: "Correo o contraseña incorrectos." };
    setUser({ nombre: encontrado.nombre, email: encontrado.email });
    return { ok: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
