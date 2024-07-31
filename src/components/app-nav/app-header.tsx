import { type ReactElement, useMemo } from 'react';
import { Logo } from '~/components/logo';
import { AppHeaderMenu } from '~/components/app-nav/app-header-menu';

import {
  AlignOption,
  GapOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import type { IAppWithIcon, TSessionUser } from '~/utils/types';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { BackIcon } from '~/components/svg-icons/back-icon';
import { FlexContainer } from '~/components/flex/flex-container.tsx';

const headerClasses = clsx(
  'w-full',
  'flex justify-between items-center',
  'shadow',
  'p-2',
);

interface Props {
  user?: TSessionUser;
  appVersion?: string;
  appList?: IAppWithIcon[];
}

export default function AppHeader(props: Props): ReactElement {
  const { appList, user } = props;
  const currentUrl = useLocation().pathname;
  const activeApp = useMemo<IAppWithIcon | undefined>(
    () => appList?.find(app => currentUrl.startsWith(app.href)),
    [currentUrl, appList],
  );

  const routeName = useMemo<string>(() => {
    const segments = currentUrl.split('/');
    return segments[segments.length - 1] || activeApp?.name || 'Overview';
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
              className={'capitalize'}>
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
          }}
          appVersion={import.meta.env.VITE_APP_VERSION}
        />
      </FlexContainer>
    </header>
  );
}
