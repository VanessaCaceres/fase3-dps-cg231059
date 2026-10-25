import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { colors, spacing } from "../theme";

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.initial}>{user.nombre.charAt(0).toUpperCase()}</Text>
      </View>
      <Text style={styles.name}>{user.nombre}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={{ width: "100%", marginTop: spacing.xl }}>
        <Button title="Cerrar sesión" variant="outline" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: spacing.lg, paddingTop: spacing.xl, backgroundColor: colors.background },
  avatar: { width: 88, height: 88, borderRadius: 44, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center" },
  initial: { color: colors.primaryText, fontSize: 36, fontWeight: "800" },
  name: { fontSize: 22, fontWeight: "800", color: colors.text, marginTop: spacing.md },
  email: { color: colors.muted, marginTop: spacing.xs },
});
