import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  padding = 'p-6',
  ...props
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        hover && !reducedMotion
          ? { y: -4, boxShadow: '0 12px 40px -8px rgba(26, 49, 44, 0.15)' }
          : {}
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        rounded-2xl transition-all duration-300
        ${glass ? 'glass' : 'bg-white shadow-card border border-brand-light border-opacity-20'}
        ${padding} ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
