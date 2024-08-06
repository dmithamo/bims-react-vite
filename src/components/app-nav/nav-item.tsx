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
      'hover:text-aLight dark:hover:text-aDark',
      'transition-all duration-200',
      {
        'text-aLight dark:text-aDark font-bold': isActive,
        'text-pLight/85 dark:text-pDark/85': !isActive,
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
