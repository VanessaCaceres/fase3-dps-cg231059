import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { colors, spacing, radius } from "../theme";

// Reemplaza estos datos por el contenido real de tu proyecto (según Figma).
export const ITEMS = [
  { id: "1", titulo: "Elemento 1", descripcion: "Descripción del primer elemento del módulo principal." },
  { id: "2", titulo: "Elemento 2", descripcion: "Descripción del segundo elemento del módulo principal." },
  { id: "3", titulo: "Elemento 3", descripcion: "Descripción del tercer elemento del módulo principal." },
  { id: "4", titulo: "Elemento 4", descripcion: "Descripción del cuarto elemento del módulo principal." },
];

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <FlatList
        data={ITEMS}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: spacing.md }}
        ListHeaderComponent={
          <View style={{ marginBottom: spacing.md }}>
            <Text style={styles.hello}>Hola, {user.nombre}</Text>
            <Text style={styles.sub}>Explora el contenido disponible</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => navigation.navigate("Detalle", { item })}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardText} numberOfLines={2}>{item.descripcion}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  hello: { fontSize: 24, fontWeight: "800", color: colors.text },
  sub: { color: colors.muted, marginTop: spacing.xs },
  card: { backgroundColor: colors.card, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md,
    borderWidth: 1, borderColor: colors.border },
  cardTitle: { fontSize: 18, fontWeight: "700", color: colors.text, marginBottom: spacing.xs },
  cardText: { color: colors.muted },
});
