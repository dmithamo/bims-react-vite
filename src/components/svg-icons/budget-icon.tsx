import { type FC } from 'react';

interface Props {
  widthHeight?: string;
}
export const BudgetIcon: FC<Props> = ({ widthHeight }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={widthHeight ?? 'w-6 h-6'}>
    <path
      fillRule="evenodd"
      d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
      clipRule="evenodd"
    />
  </svg>
);
