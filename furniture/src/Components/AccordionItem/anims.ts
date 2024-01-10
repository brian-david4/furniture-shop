const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const contentHeight = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition: transition,
  },
  exit: {
    height: 0,
    transition: transition,
  },
};
