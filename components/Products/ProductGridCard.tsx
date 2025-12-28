import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ProductGridCard({
  id,
  image,
  title,
  price,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
}) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/products/${id}`)}
    >
      {/* Top */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Bottom */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
});
