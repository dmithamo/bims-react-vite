import { type ChangeEventHandler, type ReactElement } from 'react';

import { clsx } from 'clsx';
import { FlexContainer } from '~/components/flex/flex-container.tsx';
import { type InputType } from '~/components/ui-utils/enums';
import {
  AlignOption,
  DirectionOption,
  elementRounding,
  GapOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';
import { getInputPattern } from '~/validators/input-validation';

interface Props {
  name?: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  required?: boolean;
}

export const InputField = (props: Props): ReactElement => {
  const {
    name,
    label,
    placeholder,
    type,
    error,
    value,
    onChange,
    isDisabled,
    required,
  } = props;

  const inputPattern = type ? getInputPattern(type) : undefined;

  return (
    <label htmlFor={name} className={'w-full'}>
      <FlexContainer
        width={WidthOption.full}
        direction={DirectionOption.column}
        align={AlignOption.start}
        justify={JustifyOption.start}
        gap={GapOption.minimum}>
        <p className={clsx('text-xs')}>{label}</p>

        <input
          className={clsx(
            'w-full py-3 px-3 sm:py-3',
            'text-base placeholder-slate-400',
            'bg-transparent',
            elementRounding,
            'border-2',
            'border-slate-400',
            'focus:outline-none focus:border-black focus:ring-1 focus:ring-transparent focus:bg-transparent autofill:bg-transparent',
            'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
            {
              'border-red-500 text-red-500 focus:border-red-500 focus:text-red-500':
                !!error,
            },
          )}
          name={name}
          type={type}
          placeholder={placeholder ?? ''}
          value={value}
          onChange={event => {
            if (!onChange) return;
            if (inputPattern && !inputPattern.test(event.target.value)) {
              return;
            }

            onChange(event);
          }}
          autoComplete={'off'}
          disabled={isDisabled}
          required={required}
        />
        {error ? (
          <span className={clsx('text-sm text-red-500')}>{error}</span>
        ) : (
          <></>
        )}
      </FlexContainer>
    </label>
  );
};
