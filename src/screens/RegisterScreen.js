import React, { useState } from "react";
import { Text, ScrollView, KeyboardAvoidingView, Platform, Pressable, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { validarNombre, validarEmail, validarPassword, validarConfirmacion } from "../utils/validators";
import { colors, spacing } from "../theme";

export default function RegisterScreen({ navigation }) {
  const { register } = useAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  const handleRegister = () => {
    const e = {
      nombre: validarNombre(nombre),
      email: validarEmail(email),
      password: validarPassword(password),
      confirmacion: validarConfirmacion(password, confirmacion),
    };
    setErrors(e);
    setAuthError("");
    if (Object.values(e).some(Boolean)) return;
    const res = register({ nombre, email, password });
    if (!res.ok) setAuthError(res.error);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Completa el formulario para registrarte</Text>

        <Input label="Nombre completo" placeholder="Tu nombre" autoCapitalize="words"
          value={nombre} onChangeText={setNombre} error={errors.nombre} />
        <Input label="Correo electrónico" placeholder="correo@ejemplo.com" keyboardType="email-address"
          value={email} onChangeText={setEmail} error={errors.email} />
        <Input label="Contraseña" placeholder="Mínimo 8 caracteres y un número" secure
          value={password} onChangeText={setPassword} error={errors.password} />
        <Input label="Confirmar contraseña" placeholder="Repite tu contraseña" secure
          value={confirmacion} onChangeText={setConfirmacion} error={errors.confirmacion} />

        {!!authError && <Text style={styles.authError}>{authError}</Text>}

        <Button title="Registrarme" onPress={handleRegister} />

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: spacing.lg }}>
          <Text style={styles.link}>¿Ya tienes cuenta? <Text style={styles.linkBold}>Inicia sesión</Text></Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: spacing.lg, backgroundColor: colors.background },
  title: { fontSize: 28, fontWeight: "800", color: colors.text },
  subtitle: { fontSize: 15, color: colors.muted, marginBottom: spacing.lg, marginTop: spacing.xs },
  authError: { color: colors.error, marginBottom: spacing.md, fontWeight: "600" },
  link: { textAlign: "center", color: colors.muted },
  linkBold: { color: colors.primary, fontWeight: "700" },
});
