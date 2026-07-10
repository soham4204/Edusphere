const BentoGrid = ({ children, className = '' }) => (
  <div
    className={`
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6
      auto-rows-fr ${className}
    `}
  >
    {children}
  </div>
);

export const BentoItem = ({ children, className = '', span = '' }) => (
  <div className={`${span} ${className}`}>{children}</div>
);

export default BentoGrid;
