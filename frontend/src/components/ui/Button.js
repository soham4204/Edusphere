import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-muted shadow-soft hover:shadow-glow-brand active:scale-[0.98]',
  secondary:
    'bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white active:scale-[0.98]',
  ghost:
    'bg-transparent text-brand-dark hover:bg-brand-light hover:bg-opacity-30 active:scale-[0.98]',
  accent:
    'bg-brand-light text-brand-dark hover:bg-brand hover:text-white shadow-soft active:scale-[0.98]',
  danger:
    'bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]',
  dark:
    'bg-brand-dark text-white hover:bg-brand-muted shadow-soft active:scale-[0.98]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.button
      whileHover={reducedMotion || disabled ? {} : { y: -2 }}
      whileTap={reducedMotion || disabled ? {} : { scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold rounded-xl
        transition-all duration-300 ease-out focus:outline-none focus:ring-2
        focus:ring-brand focus:ring-offset-2 focus:ring-offset-brand-bg
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </>
      )}
    </motion.button>
  );
};

export default Button;
