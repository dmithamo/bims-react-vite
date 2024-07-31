import { FlexContainer } from '~/components/flex/flex-container.tsx';
import {
  DirectionOption,
  headerNavHeight,
  WidthOption,
} from '~/components/ui-utils/styles.utils.ts';
import { clsx } from 'clsx';
import AppHeader from '~/components/app-nav/app-header.tsx';
import { Outlet } from 'react-router-dom';

export const RootRoute = () => {
  return (
    <>
      <FlexContainer
        width={WidthOption.full}
        className={clsx('min-h-screen')}
        direction={DirectionOption.column}>
        <div className={clsx('w-full', headerNavHeight)}>
          <AppHeader />
        </div>
        <div className={clsx('w-full p-4 flex-1 rounded-t-2xl shadow')}>
          <Outlet />
        </div>
      </FlexContainer>
    </>
  );
};
