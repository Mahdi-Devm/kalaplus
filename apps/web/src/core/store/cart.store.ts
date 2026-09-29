import { create } from "zustand";
import { CartItemType } from "../assets/@types/cart/cart";
import { ProductType } from "../assets/@types/product/ProductType";

type CartState = {
  cart: CartItemType[];
  addCart: (product: ProductType, quantity: number) => void;
  removeCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};
export const useCart = create<CartState>((set) => ({
  cart: [],
  addCart: (product: ProductType, quantity: number) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === product.id,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + quantity,
                }
              : cartItem,
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            id: product.id,
            title: product.title,
            price: Number(product.price),
            quantity,
            image: product.mainImage,
          },
        ],
      };
    }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem,
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((cartItem) =>
          cartItem.id === id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    })),

  removeCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    })),
}));
