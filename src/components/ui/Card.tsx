import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Hover elevation lift — shadow increase */
  hover?: boolean;
  /** Glass / frosted look — for overlay contexts */
  glass?: boolean;
  /** Apply internal padding */
  padding?: boolean;
  /** Exhibition panel — dark background variant */
  dark?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
  glass = false,
  padding = false,
  dark = false,
}: CardProps) {
  const base = dark
    ? 'overflow-hidden rounded-sm bg-surface-dark border border-white/10'
    : 'overflow-hidden rounded-sm bg-surface border border-[#E5E1DC] shadow-[0_1px_3px_rgba(0,0,0,0.04)]';

  const elevation = hover
    ? [
        'transition-all duration-300 ease-out cursor-pointer',
        /* On hover: stronger shadow + gold border tint + lift */
        'hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),var(--shadow-md)]',
        'hover:border-[rgba(200,169,106,0.45)]',
        'hover:-translate-y-[2px]',
      ].join(' ')
    : '';

  const glassStyles = glass ? 'bg-white/60 backdrop-blur-sm' : '';
  const paddingStyles = padding ? 'p-8' : '';

  return (
    <div className={`${base} ${elevation} ${glassStyles} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
