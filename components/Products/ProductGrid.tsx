import { FlatList, StyleSheet, View, Text } from "react-native";
import ProductGridCard from "./ProductGridCard";
import { ProductResponseDto } from "../../schemas/productSchema";

export default function ProductGrid({
  products,
}: {
  products: ProductResponseDto[];
}) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <ProductGridCard
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
