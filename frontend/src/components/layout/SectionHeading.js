import FadeIn from '../effects/FadeIn';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <FadeIn className={`max-w-3xl mb-12 lg:mb-16 ${alignClass[align]} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-brand-light bg-opacity-30 text-brand">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand text-opacity-80 leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
};

export default SectionHeading;
