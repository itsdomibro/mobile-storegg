import { View, Text } from "react-native";
import ProductGrid from "../../components/Products/ProductGrid";
import { useMyProduct } from "../../hooks/useMyProducts";

export default function MyProductsPage() {
  const { ownedProducts, totalOwnedProducts, totalValue, isLoading } =
    useMyProduct();

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Text>You own {totalOwnedProducts} products</Text>
      <Text>Total value: ${totalValue}</Text>

      <ProductGrid products={ownedProducts} />
    </View>
  );
}
