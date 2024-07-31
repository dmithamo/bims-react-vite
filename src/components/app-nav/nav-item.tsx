import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { TPermissionOnFE } from '~/utils/types.ts';

interface Props {
  to: string;
  children: ReactNode;
  permissions: Array<TPermissionOnFE>;
  shouldMatchExact?: boolean;
  extraClasses?: (args: { isActive: boolean }) => string;
}

export default function NavItem({
  to,
  children,
  shouldMatchExact = true,
  extraClasses = () => '',
  permissions,
}: Props): ReactNode {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'hover:text-emerald-500 dark:hover:text-emerald-700',
      'transition-all duration-200',
      {
        'text-emerald-500 dark:text-emerald-700 font-bold': isActive,
      },
      extraClasses({ isActive }),
    );

  if (!permissions) return null;
  return (
    <NavLink end={shouldMatchExact} className={linkClasses} to={to}>
      {children}
    </NavLink>
  );
}
