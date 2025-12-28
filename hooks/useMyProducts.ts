import { useStore } from "../storage/useStore";
import { useProducts } from "./useProducts";
import { ProductResponseDto } from "../schemas/productSchema";

export function useMyProduct() {
  const { ownedItems } = useStore();
  const { productsQuery } = useProducts();

  if (productsQuery.isLoading || !productsQuery.data) {
    return {
      ownedProducts: [] as ProductResponseDto[],
      totalOwnedProducts: 0,
      totalValue: 0,
      isLoading: true,
    };
  }

  const ownedProducts = productsQuery.data.filter((p) =>
    ownedItems.includes(p.id)
  );
  const totalOwnedProducts = ownedProducts.length;
  const totalValue = ownedProducts.reduce((sum, p) => sum + p.price, 0);

  return {
    ownedProducts,
    totalOwnedProducts,
    totalValue,
    isLoading: false,
  };
}
