import { createContext, useState } from "react";
import { CartItem } from "./CartItem";
import { getProductData } from "./getProductData";

export const CartContext = createContext({
  items: [] as CartItem[],
  getProductQuantity: (id: number) => {},
  addToCart: (id: number, quantity: number) => {},
  removeOneFromCart: (id: number) => {},
  deleteFromCart: (id: number) => {},
  getTotalCost: (id: number) => {},
});

// CartProvider
interface CartContextProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const getProductQuantity = (id: number) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

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

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);

      if (productData === undefined) {
        return (totalCost += 0);
      } else {
        return (totalCost += productData.price * cartItem.quantity);
      }
    });
    return totalCost;
  };

  const removeOneFromCart = (id: number) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) deleteFromCart(id);
    else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (id: number) => {
    setCartProducts(
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  };

  const contextValue = {
    items: cartProducts,
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

export default CartProvider;
