import { clsx } from 'clsx';
import { type FC } from 'react';
import {
  AlignOption,
  elementRounding,
  GapOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { FlexContainer } from '../flex/flex-container';

type Props = {
  message: string;
};

export const ErrorAlert: FC<Props> = ({ message }) => (
  <FlexContainer
    gap={GapOption.large}
    align={AlignOption.center}
    width={WidthOption.full}
    className={clsx(
      'p-2 py-3 text-slate-800 bg-red-200 border-2 border-red-400',
      elementRounding,
    )}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className={''}>{message}</span>
  </FlexContainer>
);
