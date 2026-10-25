import React, { useState } from "react";
import { Text, ScrollView, KeyboardAvoidingView, Platform, Pressable, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { validarEmail, validarPassword } from "../utils/validators";
import { colors, spacing, APP_NAME } from "../theme";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  const handleLogin = () => {
    const e = { email: validarEmail(email), password: validarPassword(password) };
    setErrors(e);
    setAuthError("");
    if (e.email || e.password) return;
    const res = login(email, password);
    if (!res.ok) setAuthError(res.error);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.brand}>{APP_NAME}</Text>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.subtitle}>Ingresa tus datos para continuar</Text>

        <Input
          label="Correo electrónico" placeholder="correo@ejemplo.com" keyboardType="email-address"
          value={email} onChangeText={setEmail} error={errors.email}
        />
        <Input
          label="Contraseña" placeholder="Tu contraseña" secure
          value={password} onChangeText={setPassword} error={errors.password}
        />

        {!!authError && <Text style={styles.authError}>{authError}</Text>}

        <Button title="Entrar" onPress={handleLogin} />

        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: spacing.lg }}>
          <Text style={styles.link}>¿No tienes cuenta? <Text style={styles.linkBold}>Regístrate</Text></Text>
        </Pressable>
        <Text style={styles.hint}>Cuenta de prueba: demo@correo.com / Demo1234</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: spacing.lg, backgroundColor: colors.background },
  brand: { fontSize: 18, fontWeight: "800", color: colors.primary, marginBottom: spacing.lg },
  title: { fontSize: 28, fontWeight: "800", color: colors.text },
  subtitle: { fontSize: 15, color: colors.muted, marginBottom: spacing.lg, marginTop: spacing.xs },
  authError: { color: colors.error, marginBottom: spacing.md, fontWeight: "600" },
  link: { textAlign: "center", color: colors.muted },
  linkBold: { color: colors.primary, fontWeight: "700" },
  hint: { textAlign: "center", color: colors.muted, fontSize: 12, marginTop: spacing.lg },
});
