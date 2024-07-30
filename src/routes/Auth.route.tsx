import { DirectionOption } from '~/components/ui-utils/styles.utils.ts';
import { FlexContainer } from '~/components/flex/flex-container.tsx';
import { clsx } from 'clsx';
import { Outlet } from 'react-router-dom';
import { AppFooter } from '~/components/app-nav/app-footer.tsx';

export const AuthRoute = () => {
  return (
    <>
      <FlexContainer
        className={'h-screen relative'}
        direction={DirectionOption.column}>
        <div className={clsx('w-full sm:w-[450px]', 'px-6 py-2', 'sm:mx-auto')}>
          <Outlet />
        </div>
      </FlexContainer>

      <p className={'text-xs absolute bottom-3 left-6'}>
        By continuing, you accept our Terms and Conditions
      </p>
      <AppFooter />
    </>
  );
};
