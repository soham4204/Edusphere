const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-brand-light bg-opacity-30 text-brand-dark',
    brand: 'bg-brand text-white',
    accent: 'bg-brand-light text-brand-dark',
    outline: 'border border-brand text-brand',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
