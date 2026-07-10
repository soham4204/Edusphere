import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const BlobBackground = ({ className = '' }) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl bg-brand-light"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl bg-brand"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl bg-brand-dark"
      />
    </div>
  );
};

export default BlobBackground;
