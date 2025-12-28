import { useStore } from "../storage/useStore";
import { useProducts } from "./useProducts";

export function useProductDetails(id: number) {
  const { productByIdQuery } = useProducts();
  const query = productByIdQuery(id);

  const {
    balance,
    isOwned,
    addOwned,
    removeOwned,
    addBalance,
    subtractBalance,
  } = useStore();

  const buy = () => {
    if (balance < query.data?.price!) return false;
    subtractBalance(query.data!.price);
    addOwned(id);
    return true;
  };

  const sell = () => {
    addBalance(query.data!.price);
    removeOwned(id);
  };

  return {
    query,
    balance,
    owned: isOwned(id),
    buy,
    sell,
  };
}
