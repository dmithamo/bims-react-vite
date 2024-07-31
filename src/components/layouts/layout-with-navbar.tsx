import type { FC, ReactElement } from 'react';
import AppNavBar from '~/components/app-nav/app-navbar';
import { Outlet } from 'react-router-dom';

interface Props {
  navLinks: Array<{
    to: string;
    label: string;
    icon: ReactElement;
    permissions: Array<string>;
  }>;
}

export const LayoutWithNavbar: FC<Props> = ({ navLinks }) => {
  return (
    <>
      <div className={'w-full h-full'}>
        <Outlet />
      </div>
      <AppNavBar navItems={navLinks} />
    </>
  );
};
