import { type ReactElement } from 'react';
import { clsx } from 'clsx';
import {
  ButtonStyle,
  ButtonType,
  elementRounding,
} from '~/components/ui-utils/styles.utils.ts';

const buttonStyleClasses = {
  [ButtonStyle.primary]:
    'bg-aLight dark:bg-aDark dark:text-black border-2 border-aLight dark:border-aDark',
  [ButtonStyle.secondary]: 'bg-sLight hover:bg-sLight text-white',
  [ButtonStyle.ghost]: 'bg-transparent hover:bg-gray-100 text-gray-700',
  [ButtonStyle.danger]: 'bg-red-500 hover:bg-red-600 text-white',
  [ButtonStyle.link]: 'bg-transparent hover:bg-transparent text-blue-500',
};

interface Props {
  onClick?: () => void;
  children: ReactElement | ReactElement[];
  isDisabled?: boolean;
  style?: ButtonStyle;
  type?: ButtonType;
  className?: string;
}

export const Button = (props: Props): ReactElement => {
  const {
    onClick,
    children,
    isDisabled,
    type = ButtonType.button,
    style = ButtonStyle.primary,
    className = '',
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={clsx(
        buttonStyleClasses[style],
        'w-full',
        'p-3',
        'uppercase',
        elementRounding,
        {
          'cursor-not-allowed': isDisabled,
          'opacity-50': isDisabled,
        },
        className,
      )}>
      {children}
    </button>
  );
};
