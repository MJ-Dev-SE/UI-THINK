import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'outline', className }) => {
  const variants = {
    outline: 'border border-white/20 text-white/70',
    solid: 'bg-white/10 text-white',
    accent: 'bg-[var(--color-accent)] text-white',
  };

  return (
    <span className={cn('px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider', variants[variant], className)}>
      {children}
    </span>
  );
};
