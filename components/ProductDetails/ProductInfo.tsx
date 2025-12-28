import { View, Text, StyleSheet } from "react-native";

export default function ProductInfo({
  category,
  title,
  description,
  price,
}: {
  category: string;
  title: string;
  description: string;
  price: number;
}) {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 20,
  },
  category: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
  },
});
