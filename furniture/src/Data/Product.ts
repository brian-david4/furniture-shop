export interface Product {
  category: string;
  id: { name: string; slug: string; productNumber: number };
  description: string;
  imageCover: string;
  images: string[];
  price: number;
  stockQuantity: number;
  measurement: { width: number; height: number };
}
