import React from 'react';
import { clsx } from 'clsx';

import { Logo } from '~/components/logo';
import {
  AlignOption,
  DirectionOption,
  GapOption,
  JustifyOption,
} from '~/components/ui-utils/styles.utils.ts';
import { FlexContainer } from '~/components/flex/flex-container.tsx';

export const AppFooter: React.FC = () => (
  <div className={clsx('w-full', 'p-12', 'bg-primary text-secondary text-xs')}>
    <FlexContainer
      direction={DirectionOption.column}
      align={AlignOption.start}
      justify={JustifyOption.center}
      gap={GapOption.medium}>
      <Logo shouldClickToHome={false} />
      <p className={'opacity-50'}>
        <a
          href="https://github.com/dmithamo"
          target="_blank"
          rel="noreferrer"
          className={'underline underline-offset-2'}>
          &copy;2023 dmithamo — GitHub
        </a>
      </p>
    </FlexContainer>
  </div>
);
