const Select = ({ label, children, className = '', ...props }) => (
  <div className="w-full">
    {label && (
      <label className="block text-sm font-medium text-brand-dark mb-1.5">
        {label}
      </label>
    )}
    <select
      className={`
        w-full px-4 py-3 rounded-xl border border-brand-light border-opacity-40
        bg-white text-brand-dark
        focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent
        transition-all duration-200 appearance-none cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  </div>
);

export default Select;
