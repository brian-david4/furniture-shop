import { Product } from "./Product";
import alum_otto from "/product-images/alum_ottoman.webp";
import coffee_table from "/product-images/coffee_table.webp";
import dining_table from "/product-images/dining_table.webp";
import lounge_chair from "/product-images/lounge_chair.webp";
import rocking_chair from "/product-images/rocking_chair.webp";
import side_table from "/product-images/side_table.webp";

export const products: Product[] = [
  {
    id: { name: "OTTOMAN", slug: "aluminium-ottoman", id: 1 },
    description:
      "La Pepino is a collection of seating variations, built on the repeating pattern of cylindrical cushions, and supported by an organically shaped base. Every piece comes fully upholstered in customisable fabrics, and plays with the different points of contact between cushion and body",
    price: 1200,
    measurement: { width: 70, height: 46 },
    image: alum_otto,
    stock: 3,
  },
  {
    id: { name: "COFFEE TABLE", slug: "coffee-table", id: 2 },
    description:
      "Capsules is a furniture series based on the evolution of the geometric form of a capsule, which consists of a cylinder with two hemispherical ends. Playing with the positive and negative space of its shape, the collection becomes an exploration of rounded and organic shapes",
    price: 1000,
    measurement: { width: 60, height: 30 },
    image: coffee_table,
    stock: 8,
  },
  {
    id: { name: "DINING TABLE", slug: "dining-table", id: 3 },
    description:
      "Capsules is a furniture series based on the evolution of the geometric form of a capsule, which consists of a cylinder with two hemispherical ends. Playing with the positive and negative space of its shape, the collection becomes an exploration of rounded and organic shapes",
    price: 3200,
    measurement: { width: 80, height: 74 },
    image: dining_table,
    stock: 4,
  },
  {
    id: { name: "LOUNGE CHAIR", slug: "lounge-chair", id: 4 },
    description:
      "Capsules is a furniture series based on the evolution of the geometric form of a capsule, which consists of a cylinder with two hemispherical ends. Playing with the positive and negative space of its shape, the collection becomes an exploration of rounded and organic shapes",
    price: 1800,
    measurement: { width: 52, height: 90 },
    image: lounge_chair,
    stock: 2,
  },
  {
    id: { name: "ROCKING CHAIR", slug: "rocking-chair", id: 5 },
    description:
      "Formica is OWL&#39;s first series, marking the beginning of the brand and workshop. The collection presents a series of seating variations in baltic birch plywood, a neutral material fit for any type of home or interior design project. As a means to be open and customisable, the series comes with a collection of add-ons in formica, which allows for a more playful and colourful design",
    price: 1500,
    measurement: { width: 60, height: 85 },
    image: rocking_chair,
    stock: 5,
  },
  {
    id: { name: "SIDE TABLE", slug: "side-table", id: 6 },
    description:
      "Alabaster is an evolving series in which alabaster is shaped into a functional play of vertical, geometric forms. Bringing in contemporary ways of working, the Alabaster series reduces the material to its raw essence while alluding to its rich history of ornament and sculpture",
    price: 950,
    measurement: { width: 40, height: 40 },
    image: side_table,
    stock: 12,
  },
];
