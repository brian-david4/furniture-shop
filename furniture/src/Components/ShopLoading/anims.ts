const ease = [0.68, 0.21, 0.65, 0.97];

export const shopLoad = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transistion: { duration: 1, ease: ease },
  },
};

export const loadImg = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    transition: { duration: 0.5, ease: ease, delay: 1.52 },
  },
};
