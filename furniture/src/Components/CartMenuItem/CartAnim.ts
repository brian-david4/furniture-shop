export const cartItemAnim = {
  inital: {
    display: "none",
  },
  enter: {
    display: "grid",
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
