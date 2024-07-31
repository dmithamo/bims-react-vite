import { type ReactElement, useMemo } from 'react';
import { Logo } from '~/components/logo';
import { AppHeaderMenu } from '~/components/app-nav/app-header-menu';

import {
  AlignOption,
  GapOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { TNavbarItem, TSessionUser } from '~/utils/types';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { BackIcon } from '~/components/svg-icons/back-icon';
import { FlexContainer } from '~/components/flex/flex-container.tsx';
import {
  assetsRoute,
  moneyRoute,
  timelinesRoute,
} from '~/utils/routes.utils.ts';
import { WalletIcon } from '~/components/svg-icons/wallet-icon.tsx';
import { SquaresIcon } from '~/components/svg-icons/squares-icon.tsx';
import { CalendarIcon } from '~/components/svg-icons/calendar-icon.tsx';

const headerClasses = clsx(
  'w-full',
  'flex justify-between items-center',
  'shadow',
  'p-2',
  'bg-slate-50 dark:bg-slate-950',
);

interface Props {
  user?: TSessionUser;
  appVersion?: string;
}

export default function AppHeader(props: Props): ReactElement {
  const appList: Array<TNavbarItem> = useMemo(
    () => [
      {
        to: moneyRoute(),
        icon: <WalletIcon />,
        label: 'Money',
        permissions: ['moneyOverviewRead'],
      },
      {
        to: assetsRoute(),
        icon: <SquaresIcon />,
        label: 'Assets',
        permissions: ['assetsRead'],
      },
      {
        to: timelinesRoute(),
        icon: <CalendarIcon />,
        label: 'Timelines',
        permissions: ['timelinesRead'],
      },
    ],
    [],
  );
  const { user } = props;
  const currentUrl = useLocation().pathname;
  const activeApp = useMemo<TNavbarItem | undefined>(
    () => appList?.find(app => currentUrl.startsWith(app.to)),
    [currentUrl, appList],
  );

  const routeName = useMemo<string>(() => {
    const segments = currentUrl.split('/');
    return segments[segments.length - 1] || activeApp?.label || 'Overview';
  }, [activeApp, currentUrl]);

  if (user) {
    return (
      <header className={headerClasses}>
        <Logo shouldClickToHome={false} />
      </header>
    );
  }

  return (
    <header className={headerClasses}>
      <FlexContainer
        width={WidthOption.full}
        align={AlignOption.center}
        justify={JustifyOption.between}>
        {activeApp ? (
          <div className={clsx('font-bold text-lg select-none')}>
            <FlexContainer
              gap={GapOption.large}
              align={AlignOption.center}
              className={'capitalize -ml-2'}>
              <button onClick={() => history.back()}>
                <BackIcon />
              </button>
              {routeName}
            </FlexContainer>
          </div>
        ) : (
          <Logo shouldClickToHome={true} />
        )}

        <AppHeaderMenu
          appList={appList}
          user={{
            id: crypto.randomUUID(),
            name: 'D Mithamo',
            email: 'bmithamo@gmail.com',
            account: { id: crypto.randomUUID(), name: 'Bims' },
            role: { id: crypto.randomUUID(), name: 'Admin' },
            permissions: [],
          }}
          appVersion={import.meta.env.VITE_APP_VERSION}
        />
      </FlexContainer>
    </header>
  );
}
