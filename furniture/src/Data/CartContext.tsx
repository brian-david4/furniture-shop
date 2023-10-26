import { createContext, useState } from "react";
import { CartItem } from "./CartItem";

export const CartContext = createContext({
  getProductQuantity: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// CartProvider
interface CartContextProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const getProductQuantity = (id: number) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) return 0;

    return quantity;
  };

  const addToCart = (id: number, quantity: number) => {
    const prodQuantity = getProductQuantity(id);

    if (prodQuantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: quantity }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
  };

  const contextValue = {
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
