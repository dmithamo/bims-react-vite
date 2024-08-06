import NavItem from '~/components/app-nav/nav-item';
import { type ReactElement, useMemo, useRef, useState } from 'react';
import {
  logoutRoute,
  notificationsRoute,
  settingsRoute,
} from '~/utils/routes.utils';

import {
  AlignOption,
  ButtonType,
  DirectionOption,
  GapOption,
  JustifyOption,
  SpacingOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { TNavbarItem, TSessionUser } from '~/utils/types';
import { CogIcon } from '~/components/svg-icons/cog-icon';
import { NotificationsIcon } from '~/components/svg-icons/notifications-icon';
import {
  DetailedLoggedInUser,
  LoggedInUser,
} from '~/components/app-nav/logged-in-user';
import { clsx } from 'clsx';
import { XIcon } from '~/components/svg-icons/x-icon';
import { BugIcon } from '~/components/svg-icons/bug-icon';
import { LogoutIcon } from '~/components/svg-icons/logout-icon';
import { Form } from 'react-router-dom';
import { useOnClickOutside } from '~/utils/hooks/useOnClickOutside.ts';
import { FlexContainer } from '~/components/flex/flex-container.tsx';

const HeaderMenuItemWrapper = ({
  children,
  onClick,
}: {
  children: ReactElement;
  onClick: () => void;
}): ReactElement => (
  <button onClick={onClick} className={clsx('cursor-pointer')}>
    {children}
  </button>
);

interface Props {
  user: TSessionUser;
  appVersion?: string;
  appList: Array<TNavbarItem>;
}

export const AppHeaderMenu = (props: Props): ReactElement => {
  const { user, appVersion, appList } = props;

  const headerLinks: Array<TNavbarItem> = useMemo(
    () => [
      {
        to: notificationsRoute(),
        icon: <NotificationsIcon />,
        label: 'Notifications',
        permissions: [],
      },
      {
        to: settingsRoute(),
        icon: <CogIcon />,
        label: 'Settings',
        permissions: [],
      },
    ],
    [],
  );

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setShowMenu(isShown => !isShown);
  };

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setShowMenu(false);
  });

  const iconClasses = clsx('w-8 h-8', 'cursor-pointer');

  return (
    <>
      <button
        onClick={() => {
          setShowMenu(true);
        }}
        className={clsx(
          'flex',
          'justify-center items-center',
          'sm:justify-start sm:gap-2',
        )}>
        <LoggedInUser user={user} />
      </button>

      {showMenu && (
        <div
          ref={ref}
          className={clsx(
            'fixed right-0 top-0',
            'w-full h-full sm:w-[25rem]',
            'flex flex-col gap-6',
            'p-8 shadow',
            'bg-sLight text-pLight dark:bg-sDark dark:text-pDark',
            'z-10',
          )}>
          <FlexContainer
            className={'pb-8'}
            width={WidthOption.full}
            align={AlignOption.center}
            justify={JustifyOption.between}
            marginY={SpacingOption.large}>
            <DetailedLoggedInUser user={user} />
            <XIcon onClick={toggleMenu} iconClasses={iconClasses} />
          </FlexContainer>

          <FlexContainer
            className={'pb-8 border-b border-pLight dark:border-pDark'}
            direction={DirectionOption.column}
            gap={GapOption.medium}
            marginY={SpacingOption.large}>
            {appList.map(({ to, icon, label, permissions }) => (
              <HeaderMenuItemWrapper onClick={toggleMenu} key={to}>
                <NavItem
                  shouldMatchExact={false}
                  to={to}
                  permissions={permissions}>
                  <div
                    className={clsx('flex items-center justify-start gap-4')}>
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </NavItem>
              </HeaderMenuItemWrapper>
            ))}
          </FlexContainer>

          <FlexContainer
            className={'pb-8 border-b border-zinc-900 dark:border-slate-400'}
            direction={DirectionOption.column}
            gap={GapOption.medium}
            marginY={SpacingOption.large}>
            {headerLinks.map(({ to, icon, label, permissions }) => (
              <HeaderMenuItemWrapper onClick={toggleMenu} key={to}>
                <NavItem
                  permissions={permissions}
                  key={to}
                  shouldMatchExact={true}
                  to={to}>
                  <div
                    className={clsx('flex items-center justify-start gap-4')}>
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </NavItem>
              </HeaderMenuItemWrapper>
            ))}
          </FlexContainer>

          <FlexContainer
            direction={DirectionOption.column}
            gap={GapOption.large}
            marginY={SpacingOption.large}>
            <FlexContainer
              direction={DirectionOption.row}
              align={AlignOption.center}
              gap={GapOption.medium}>
              <BugIcon />
              <span>v-{appVersion}</span>
            </FlexContainer>

            <Form method={'post'} action={logoutRoute()}>
              <button
                type={ButtonType.submit}
                className={clsx('outline-0 bg-transparent border-0')}>
                <FlexContainer
                  direction={DirectionOption.row}
                  align={AlignOption.center}
                  gap={GapOption.medium}>
                  <LogoutIcon />
                  <span>Logout</span>
                </FlexContainer>
              </button>
            </Form>
          </FlexContainer>
        </div>
      )}
    </>
  );
};
