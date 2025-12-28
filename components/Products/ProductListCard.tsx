import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ProductResponseDto } from "../../schemas/productSchema";
import { router } from "expo-router";

export default function ProductListCard({
  product,
}: {
  product: ProductResponseDto;
}) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/products/${product.id}`)}
    >
      {/* Left */}
      <View style={styles.leftContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      {/* Right */}
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {product.description}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",

    padding: 12,

    flexDirection: "row",
    backgroundColor: "#fff",

    borderRadius: 8,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 2,
    justifyContent: "center",
    flexShrink: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    flexShrink: 1,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    flexShrink: 1,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
  },
});
