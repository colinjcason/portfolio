import { Variants } from "framer-motion";

export const textVariants: Variants = {
  hidden: {
    y: '100%',
    opacity: 0
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut'
    }
  }
};

export const coverVariants: Variants = {
  hidden: {
    width: '100%',
  },
  visible: {
    width: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
}