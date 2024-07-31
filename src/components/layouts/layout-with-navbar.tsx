import type { FC } from 'react';
import AppNavBar from '~/components/app-nav/app-navbar';
import { Outlet } from 'react-router-dom';
import { TNavbarItem } from '~/utils/types.ts';

interface Props {
  navLinks: Array<TNavbarItem>;
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
