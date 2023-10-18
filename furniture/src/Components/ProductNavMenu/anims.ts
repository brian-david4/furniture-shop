export const navLinks = {
  initial: {
    opacity: 0,
    x: "5%",
  },
  enter: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.75,
      ease: [0.45, 0, 0.55, 1],
      staggerChildren: 0.2,
    },
  },
};

export const navLink = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};
