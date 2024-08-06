import { type ReactElement } from 'react';
import {
  AlignOption,
  DirectionOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { clsx } from 'clsx';
import { FlexContainer } from '~/components/flex/flex-container.tsx';
import NavItem from '~/components/app-nav/nav-item.tsx';
import { TNavbarItem } from '~/utils/types.ts';

interface Props {
  navItems: Array<TNavbarItem>;
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
        className={clsx('bg-sLight dark:bg-sDark', 'p-2', 'w-full sm:w-1/3')}
        direction={DirectionOption.row}
        justify={JustifyOption.around}
        align={AlignOption.center}
        width={WidthOption.full}>
        {navItems.map(({ to, icon, label, permissions }) => (
          <SidebarItem
            key={to}
            to={to}
            label={label}
            icon={icon}
            permissions={permissions}
          />
        ))}
      </FlexContainer>
    </nav>
  );
}

function SidebarItem({
  to,
  label,
  icon,
  permissions,
}: TNavbarItem): ReactElement {
  const linkClasses = ({ isActive }: { isActive: boolean }): string =>
    clsx('flex flex-col items-center gap-none', {
      '[&>*:nth-child(even)]:inline-block': isActive,
    });

  return (
    <button onClick={() => window.scrollTo(0, 0)}>
      <NavItem
        shouldMatchExact={true}
        extraClasses={linkClasses}
        to={to}
        permissions={permissions}>
        {icon}
        <span className={'text-xs hidden'}>{label}</span>
      </NavItem>
    </button>
  );
}
