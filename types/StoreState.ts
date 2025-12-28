export type StoreState = {
  balance: number;
  ownedItems: number[];

  addOwned: (id: number) => void;
  removeOwned: (id: number) => void;
  isOwned: (id: number) => boolean;

  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => void;
  resetBalance: () => void;
};
