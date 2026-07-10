const GradientBackground = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-hero" />
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
      style={{ background: 'radial-gradient(circle, #89D7B7 0%, transparent 70%)' }}
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
      style={{ background: 'radial-gradient(circle, #428475 0%, transparent 70%)' }}
    />
    <div className="absolute inset-0 noise-bg" />
    <div className="relative z-10">{children}</div>
  </div>
);

export default GradientBackground;
