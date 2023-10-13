import { Product } from "./Product";
import alum_otto from "/product-images/alum_ottoman.webp";

export const products: Product[] = [
  {
    id: { name: "ALUMINIUM OTTOMAN", slug: "aluminium-ottoman" },
    description:
      "La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body",
    price: 1200,
    measurement: { width: 70, height: 46 },
    image: alum_otto,
  },
];
