const Textarea = ({ label, className = '', ...props }) => (
  <div className="w-full">
    {label && (
      <label className="block text-sm font-medium text-brand-dark mb-1.5">
        {label}
      </label>
    )}
    <textarea
      className={`
        w-full px-4 py-3 rounded-xl border border-brand-light border-opacity-40
        bg-white text-brand-dark placeholder-brand placeholder-opacity-50
        focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent
        transition-all duration-200 resize-y min-h-[100px]
        ${className}
      `}
      {...props}
    />
  </div>
);

export default Textarea;
