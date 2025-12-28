import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreState } from "../types/StoreState";

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      balance: 500,
      ownedItems: [],

      addOwned: (id) =>
        set((state) => ({
          ownedItems: state.ownedItems.includes(id)
            ? state.ownedItems
            : [...state.ownedItems, id],
        })),

      removeOwned: (id) =>
        set((state) => ({
          ownedItems: state.ownedItems.filter((itemId) => itemId !== id),
        })),
      isOwned: (id) => get().ownedItems.includes(id),

      addBalance: (amount) =>
        set((state) => ({ balance: state.balance + amount })),

      subtractBalance: (amount) =>
        set((state) => ({
          balance:
            state.balance - amount >= 0
              ? state.balance - amount
              : state.balance,
        })),

      resetBalance: () => set({ balance: 0 }),
    }),
    {
      name: "storegg-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
