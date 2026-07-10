import { motion } from 'framer-motion';

const Marquee = ({ children, speed = 25, reverse = false, className = '' }) => (
  <div className={`overflow-hidden whitespace-nowrap ${className}`}>
    <motion.div
      className="inline-flex"
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      <div className="inline-flex items-center">{children}</div>
      <div className="inline-flex items-center">{children}</div>
    </motion.div>
  </div>
);

export default Marquee;
