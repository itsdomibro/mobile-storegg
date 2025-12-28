import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ProductHeader({ balance }: { balance: number }) {
  return (
    <View style={styles.header}>
      {/* Left Container */}
      <View style={styles.leftContainer}>
        <Text style={styles.branding}>Storegg</Text>
      </View>

      {/* Right Container */}
      <View style={styles.rightContainer}>
        <Pressable
          style={styles.rightContainer}
          onPress={() => router.push("/game")}
        >
          <Text style={styles.balance}>${balance.toFixed(2)}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#007AFF",
    borderRadius: 6,
  },
  branding: {
    fontSize: 18,
    fontWeight: "bold",
  },
  balance: {
    color: "#fff",
    fontWeight: "600",
  },
});
