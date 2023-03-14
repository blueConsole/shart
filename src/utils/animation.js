const easeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const easeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const easeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const easeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const swipeDown = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -500,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const swipeUp = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 500,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const swipeRight = {
  hidden: { opacity: 0, x: -500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const swipeLeft = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const scaleDown = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.5,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const rotateRight = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    rotate: 180,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const rotateLeft = {
  hidden: { opacity: 0, rotate: 180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    rotate: -180,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const rotateRight360 = {
  hidden: { opacity: 0, rotate: -360 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    rotate: 360,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const rotateLeft360 = {
  hidden: { opacity: 0, rotate: 360 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    rotate: -360,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const backgroundColor = {
  hidden: { opacity: 0, y: 50, backgroundColor: "#000000" },
  visible: {
    opacity: 1,
    y: 0,
    backgroundColor: "#ffffff",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    backgroundColor: "#000000",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const animation = {
  easeDown,
  easeUp,
  swipeDown,
  swipeUp,
  scaleUp,
  scaleDown,
  rotateRight,
  rotateLeft,
  rotateLeft360,
  rotateRight360,
  backgroundColor,
  easeLeft,
  easeRight,
  swipeLeft,
  swipeRight,
};
