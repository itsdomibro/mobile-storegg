import { FlatList, StyleSheet } from "react-native";
import { ProductResponseDto } from "../../schemas/productSchema";
import ProductListCard from "./ProductListCard";

export default function ProductList({
  products,
}: {
  products: ProductResponseDto[];
}) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => <ProductListCard product={item} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 15,
    gap: 10,
  },
});
