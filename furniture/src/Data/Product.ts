export interface Product {
  id: { name: string; slug: string };
  description: string;
  images: string[];
  price: number;
  measurement: { width: number; height: number };
}
