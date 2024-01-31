const transition = { duration: 0.5, ease: [0.5, 1, 0.89, 1] };

export const priceOptions = {
  initial: {
    backgroundColor: "#f5f5f5",
  },
  active: {
    backgroundColor: "rgba(209, 226, 244, 0.4)",
    transition: transition,
  },
  inactive: {
    backgroundColor: "#f5f5f5",
    transition: transition,
  },
};
