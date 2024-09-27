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
  animate: {
    width: ['0%', '100%', '0%'],
    left: ['0%', '0%', '100%'],
    transition: { duration: 0.5, times: [0, 0.5, 1] }
  }
}