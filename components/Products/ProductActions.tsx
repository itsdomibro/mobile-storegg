import { useRouter } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ProductActions({
  viewMode,
  setViewMode,
}: {
  viewMode: string;
  setViewMode: Dispatch<SetStateAction<"grid" | "list">>;
}) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Left: My Products */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/myproducts")}
      >
        <Text style={styles.buttonText}>My Products</Text>
      </Pressable>

      {/* Right: Grid/List Toggle */}
      <View style={styles.rightButtons}>
        <Pressable
          style={[styles.button, viewMode && styles.active]}
          onPress={() => setViewMode("grid")}
        >
          <Text style={styles.buttonText}>Grid</Text>
        </Pressable>

        <Pressable
          style={[styles.button, viewMode && styles.active]}
          onPress={() => setViewMode("list")}
        >
          <Text style={styles.buttonText}>List</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  rightButtons: { flexDirection: "row" },
  button: {
    backgroundColor: "#ccc",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 6,
  },
  active: { backgroundColor: "#007AFF" },
  buttonText: { color: "#fff", fontWeight: "600" },
});
