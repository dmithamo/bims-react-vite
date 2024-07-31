import { type ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

interface Props {
  to: string;
  children: ReactNode;
  shouldMatchExact?: boolean;
  extraClasses?: (args: { isActive: boolean }) => string;
}

export default function NavItem({
  to,
  children,
  shouldMatchExact = true,
  extraClasses = () => '',
}: Props): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'hover:text-emerald-500 dark:hover:text-emerald-700',
      'transition-all duration-200',
      {
        'text-emerald-500 dark:text-emerald-700 font-bold': isActive,
      },
      extraClasses({ isActive }),
    );

  return (
    <NavLink end={shouldMatchExact} className={linkClasses} to={to}>
      {children}
    </NavLink>
  );
}
