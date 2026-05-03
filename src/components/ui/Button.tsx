import { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import type { Pathnames } from '@/i18n/routing';

interface ButtonProps {
  children: ReactNode;
  href?: Pathnames;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center font-medium ' +
    'transition-all duration-300 ease-out select-none rounded-sm cursor-pointer ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
    'disabled:opacity-40 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    /**
     * Primary — filled gold, white text.
     */
    primary:
      'bg-[#C8A96A] text-white ' +
      'shadow-[var(--shadow-sm)] ' +
      'hover:bg-[#B89658] hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),var(--shadow-md)] ' +
      'active:scale-[0.99] active:translate-y-0',

    /**
     * Secondary — gold border, neutral text.
     */
    secondary:
      'bg-transparent text-[#1A1A1A] rounded-sm ' +
      'border-2 border-[#C8A96A] ' +
      'hover:bg-[#F7F5F2] hover:border-[#B89658] hover:text-[#1A1A1A] hover:-translate-y-px ' +
      'shadow-none active:scale-[0.99] active:translate-y-0',

    /**
     * Outline — accent border, transparent.
     */
    outline:
      'bg-transparent text-accent rounded-sm ' +
      'border border-[#C8A96A] ' +
      'hover:bg-[#C8A96A] hover:text-white hover:-translate-y-px ' +
      'active:scale-[0.99] active:translate-y-0',

    /**
     * Ghost — invisible; text accent only.
     */
    ghost:
      'bg-transparent text-foreground-muted rounded-sm ' +
      'hover:text-foreground hover:bg-[rgba(26,26,26,0.05)]',
  };

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2   text-xs  tracking-[0.06em]',
    md: 'px-7 py-3   text-sm  tracking-[0.05em]',
    lg: 'px-9 py-3.5 text-sm  tracking-[0.06em]',
  };

  const width = fullWidth ? 'w-full' : '';
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
