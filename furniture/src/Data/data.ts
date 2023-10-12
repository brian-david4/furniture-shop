import { Product } from "./Product";
import { olderdalenImg } from "../../public/product-images-array/product-images";

export const products: Product[] = [
  {
    id: { name: "OLDERDALEN", slug: "olderdalen" },
    description:
      "OLDERDALEN bedside table is inspired by traditional Scandinavian craftsmanship. Its generous form supports your pre-sleep rituals, from charging your phone to storing your books and magazines.",
    price: 75,
    measurement: { width: 47, height: 43 },
    images: olderdalenImg,
  },
];
