import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
      decrement: () => set({ count: get().count - 1 }),
    }),
    {
      name: "counter-storage", // name of the item in the storage (must be unique)
    },
  ),
);

export default useCounterStore;
