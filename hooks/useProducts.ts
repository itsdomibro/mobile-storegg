import { ProductResponseDto } from "../schemas/productSchema";
import { productService } from "../services/productService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<ProductResponseDto[]>({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
  });

  const productByIdQuery = (id: number) =>
    useQuery<ProductResponseDto>({
      queryKey: ["products", id],
      queryFn: () => productService.getById(id),
      enabled: !!id,
    });

  return {
    productsQuery,
    productByIdQuery,
  };
}
