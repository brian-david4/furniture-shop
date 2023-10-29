import { products } from "./data";

export const getProductData = (id: number) => {
  let productData = products.find((product) => product.id.id === id);

  if (productData === undefined) {
    console.log("Product does not exist in product array with id:" + id);
    return undefined;
  }

  return productData;
};
