import { type ReactElement } from 'react';
import {
  AlignOption,
  DirectionOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { FlexContainer } from '~/components/flex/flex-container.tsx';

interface Props {
  navItems: Array<{
    to: string;
    label: string;
    icon: ReactElement;
  }>;
}

export default function AppNavbar(props: Props): ReactElement | null {
  const { navItems } = props;

  if (navItems.length < 2) return null;
  return (
    <nav
      className={clsx(
        `w-full flex items-center justify-center`,
        'fixed bottom-0 left-0',
        'transition-all duration-200',
      )}>
      <FlexContainer
        className={clsx(
          'bg-slate-50 dark:bg-gray-950',
          'p-2',
          'w-full sm:w-1/3',
        )}
        direction={DirectionOption.row}
        justify={JustifyOption.around}
        align={AlignOption.center}
        width={WidthOption.full}>
        {navItems.map(({ to, icon, label }) => (
          <SidebarItem key={to} to={to} label={label} icon={icon} />
        ))}
      </FlexContainer>
    </nav>
  );
}

function SidebarItem({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: ReactElement;
}): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx(
      'w-full flex flex-col items-center gap-0',
      'transition-all duration-200',
      'justify-self-center',
      'hover:text-accent',
      isActive
        ? 'text-emerald-500 [&>*:nth-child(even)]:inline-block'
        : 'dark:text-slate-400',
    );

  return (
    <NavLink end={true} className={linkClasses} to={to}>
      {icon}
      <span className={'text-xs hidden'}>{label}</span>
    </NavLink>
  );
}
