import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { colors, spacing } from "../theme";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.text}>{item.descripcion}</Text>
      <View style={{ marginTop: spacing.lg }}>
        <Button title="Volver" variant="outline" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.lg, backgroundColor: colors.background },
  title: { fontSize: 26, fontWeight: "800", color: colors.text, marginBottom: spacing.md },
  text: { fontSize: 16, color: colors.muted, lineHeight: 24 },
});
