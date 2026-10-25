import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { colors, spacing, radius } from "../theme";

export default function Input({ label, error, secure, ...props }) {
  const [oculto, setOculto] = useState(!!secure);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.field, error ? styles.fieldError : null]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.muted}
          secureTextEntry={oculto}
          autoCapitalize="none"
          {...props}
        />
        {secure && (
          <Pressable onPress={() => setOculto(!oculto)}>
            <Text style={styles.toggle}>{oculto ? "Mostrar" : "Ocultar"}</Text>
          </Pressable>
        )}
      </View>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: { fontSize: 14, fontWeight: "600", color: colors.text, marginBottom: spacing.xs },
  field: {
    flexDirection: "row", alignItems: "center", backgroundColor: colors.card,
    borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.md,
  },
  fieldError: { borderColor: colors.error },
  input: { flex: 1, paddingVertical: 12, fontSize: 16, color: colors.text },
  toggle: { color: colors.primary, fontWeight: "600", fontSize: 13 },
  error: { color: colors.error, fontSize: 12, marginTop: spacing.xs },
});
