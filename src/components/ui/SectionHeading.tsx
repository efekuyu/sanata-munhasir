interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  /** Light variant for dark section backgrounds */
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = centered ? 'text-center items-center' : 'items-start';
  const titleColor = light ? 'text-background/92' : 'text-foreground';
  const subColor   = light ? 'text-background/55' : 'text-foreground-muted';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-label">{eyebrow}</span>
      )}

      <h2 className={`text-heading-1 ${titleColor}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base leading-relaxed ${subColor} ${centered ? 'max-w-xl' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}

      {/* Gold accent line — delicate, not decorative noise */}
      <div
        className={`mt-2 flex ${centered ? 'justify-center' : ''}`}
        aria-hidden="true"
      >
        <div className="h-px w-10 bg-accent opacity-40" />
        <div className="h-px w-4 bg-gold-champagne opacity-60 ml-0.5" />
      </div>
    </div>
  );
}
