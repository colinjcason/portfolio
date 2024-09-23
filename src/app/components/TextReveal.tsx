import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

type TextRevealProps = {
  text: string;
  coverVariants: object;
  textVariants: object;
  className?: string; // Optional prop for text styling
};

const TextReveal = ({ text, coverVariants, textVariants, className = '' }: TextRevealProps) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
      <motion.div
        initial="hidden"
        animate={showText ? 'visible' : 'hidden'}
        variants={coverVariants as Variants}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          backgroundColor: '#5eead4',
          zIndex: 10,
        }}
      />
      <motion.h1
        initial="hidden"
        animate={showText ? 'visible' : 'hidden'}
        variants={textVariants as Variants}
        style={{ display: 'inline-block' }}
        className={className}
      >
        {text}
      </motion.h1>
    </div>
  );
};
export default TextReveal;