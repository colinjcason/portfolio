import { motion, Variants } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

type TextRevealProps = {
  children: ReactNode;
  coverVariants: object;
  textVariants: object;
  className?: string; // Optional prop for text styling
};

const TextReveal = ({ children, coverVariants, textVariants, className = '' }: TextRevealProps) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: '0%', left: '0%' }}
        animate="animate"
        variants={coverVariants as Variants}
        style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          backgroundColor: '#5eead4',
          zIndex: 10,
        }}
      />
      <motion.p
        initial="hidden"
        animate={showText ? 'visible' : 'hidden'}
        variants={textVariants as Variants}
        style={{ display: 'inline-block' }}
        className={className}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default TextReveal;