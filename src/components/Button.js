import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors, radius } from "../theme";

export default function Button({ title, onPress, variant = "primary" }) {
  const outline = variant === "outline";
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, outline && styles.outline, pressed && { opacity: 0.8 }]}
    >
      <Text style={[styles.text, outline && { color: colors.primary }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: radius.md, alignItems: "center" },
  outline: { backgroundColor: "transparent", borderWidth: 1, borderColor: colors.primary },
  text: { color: colors.primaryText, fontSize: 16, fontWeight: "700" },
});
