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
        className={clsx('min-h-screen p-3')}
        direction={DirectionOption.column}>
        <div className={clsx('w-full', headerNavHeight)}>
          <AppHeader />
        </div>
        <div className={clsx('w-full flex-1 rounded-t-xl shadow')}>
          <Outlet />
        </div>
      </FlexContainer>
    </>
  );
};
