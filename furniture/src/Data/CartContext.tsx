import { createContext, useState } from "react";
import { CartItem } from "./CartItem";
import { getProductData } from "./getProductData";

type CartContextType = {
  items: CartItem[];
  deliveryPrice: number;
  setDeliveryPrice: (num: number) => void;
  getProductQuantity: (id: number) => number;
  addToCart: (id: number, quantity: number, stock: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
  getTotalCartQuantity: () => number;
};

export const CartContext = createContext({} as CartContextType);

// CartProvider
interface CartContextProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartContextProps) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);
  const [deliveryPriceState, setDeliveryPriceState] = useState<number>(0);

  const setDeliveryPrice = (num: number) => {
    setDeliveryPriceState(num);
  };

  const deliveryPrice = deliveryPriceState / 100;

  const getProductQuantity = (id: number) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  };

  const getTotalCartQuantity = () => {
    let quantity = 0;
    cartProducts.forEach((cartItem) => {
      quantity += getProductQuantity(cartItem.id);
    });
    return quantity;
  };

  const addToCart = (id: number, quantity: number, stock: number) => {
    const prodQuantity = getProductQuantity(id);

    if (quantity + prodQuantity > stock) {
      quantity = stock - prodQuantity;
    }
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
    setDeliveryPrice,
    deliveryPrice,
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getTotalCartQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
