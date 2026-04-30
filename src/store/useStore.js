import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((i) => i.id === product.id);

      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i.id === product.id
              ? { ...i, qty: i.qty + 1 }
              : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),
}));
