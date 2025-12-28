import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useProductDetails } from "../../hooks/useProductDetails";
import ProductImage from "../../components/ProductDetails/ProductImage";
import ProductInfo from "../../components/ProductDetails/ProductInfo";
import ProductActions from "../../components/ProductDetails/ProductActions";
import { useStore } from "../../storage/useStore";

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { query, balance, owned, buy, sell } = useProductDetails(Number(id));

  if (query.isLoading) return <Text>Loading...</Text>;
  if (query.error) return <Text>Error: {query.error.message}</Text>;

  const product = query.data!;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductImage image={product.image} />
      <ProductInfo
        category={product.category}
        title={product.title}
        description={product.description}
        price={product.price}
      />
      <ProductActions
        balance={balance}
        owned={owned}
        price={product.price}
        buy={buy}
        sell={sell}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
});
