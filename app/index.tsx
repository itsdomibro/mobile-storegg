import { Pressable, StyleSheet, Text, View } from "react-native";
import ProductList from "../components/Products/ProductList";
import { useProducts } from "../hooks/useProducts";
import ProductSearchBar from "../components/Products/ProductSearchBar";
import { useState } from "react";
import ProductActions from "../components/Products/ProductActions";
import ProductGrid from "../components/Products/ProductGrid";
import { useStore } from "../storage/useStore";

export default function HomeScreen() {
  const { productsQuery } = useProducts();
  const [search, setSearch] = useState("");
  const { resetBalance } = useStore();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  if (productsQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (productsQuery.error) {
    return <Text>Error: {productsQuery.error.message}</Text>;
  }

  const filteredProducts = productsQuery.data!.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ProductSearchBar value={search} onChangeText={setSearch} />
      <ProductActions viewMode={viewMode} setViewMode={setViewMode} />

      {viewMode === "grid" ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <ProductList products={filteredProducts} />
      )}

      {/* Reset Coin Button */}
      <Pressable onPress={resetBalance}>
        <Text>Reset Coins</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
