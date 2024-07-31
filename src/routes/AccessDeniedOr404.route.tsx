import { FlexContainer } from '~/components/flex/flex-container.tsx';
import {
  AlignOption,
  DirectionOption,
  GapOption,
  JustifyOption,
} from '~/components/ui-utils/styles.utils.ts';
import { clsx } from 'clsx';

export const AccessDeniedOr404Route = () => {
  {
    return (
      <>
        <FlexContainer
          direction={DirectionOption.column}
          align={AlignOption.center}
          justify={JustifyOption.center}
          className={'h-[70vh] p-4'}>
          <FlexContainer
            direction={DirectionOption.column}
            gap={GapOption.large}
            align={AlignOption.start}>
            <h1 className="w-full text-8xl font-bold opacity-60">{'404'}</h1>
            <p className="">
              {
                'The page you tried to access does not exist, thought it once might have. Either that or you are forbidden from accessing it.'
              }
            </p>
            <button
              className={clsx(
                'text-accent',
                'cursor-pointer',
                'underline',
                'underline-offset-4',
              )}
              onClick={() => history.back()}>
              Back
            </button>
          </FlexContainer>
        </FlexContainer>
      </>
    );
  }
};
