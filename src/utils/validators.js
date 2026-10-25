export const validarNombre = (v) => {
  if (!v.trim()) return "El nombre es obligatorio.";
  if (v.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
  return "";
};

export const validarEmail = (v) => {
  if (!v.trim()) return "El correo es obligatorio.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "Ingresa un correo válido.";
  return "";
};

export const validarPassword = (v) => {
  if (!v) return "La contraseña es obligatoria.";
  if (v.length < 8) return "La contraseña debe tener al menos 8 caracteres.";
  if (!/\d/.test(v)) return "La contraseña debe incluir al menos un número.";
  return "";
};

export const validarConfirmacion = (password, confirmacion) => {
  if (!confirmacion) return "Confirma tu contraseña.";
  if (password !== confirmacion) return "Las contraseñas no coinciden.";
  return "";
};
