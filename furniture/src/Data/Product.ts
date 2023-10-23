export interface Product {
  id: { name: string; slug: string };
  description: string;
  image: string;
  price: number;
  measurement: { width: number; height: number };
  stock: number;
}
