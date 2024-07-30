import { clsx } from 'clsx';
import { type ReactElement } from 'react';
import {
  elementRounding,
  getPaddingClass,
  getWidthClass,
  SpacingOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils';

interface Props {
  children: ReactElement | ReactElement[];
  width?: WidthOption;
  isRaised?: boolean;
  padding?: SpacingOption;
  className?: string;
}

export function CardContainer(props: Props): ReactElement {
  const { children, width, isRaised, padding, className = '' } = props;
  const widthClass = getWidthClass(width ?? WidthOption.full);
  const raisedClass = isRaised ? 'shadow' : '';
  const paddingClass = getPaddingClass(padding ?? SpacingOption.none);

  return (
    <div
      className={clsx(
        widthClass,
        raisedClass,
        paddingClass,
        elementRounding,
        'bg-white',
        className,
      )}>
      {children}
    </div>
  );
}
