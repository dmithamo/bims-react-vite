import { type ReactElement } from 'react';
import genericAvatar from '/generic-avatar.jpg';

import { type TSessionUser } from '~/utils/types';
import { FlexContainer } from '~/components/flex/flex-container.tsx';
import {
  AlignOption,
  DirectionOption,
  GapOption,
} from '~/components/ui-utils/styles.utils.ts';

interface Props {
  user: TSessionUser;
}

export const LoggedInUser = (props: Props): ReactElement => {
  const {
    user: { name, avatar, account, role },
  } = props;
  return (
    <FlexContainer
      align={AlignOption.center}
      gap={GapOption.minimum}
      className={'text-sm'}>
      <img
        className={'h-10 w-10 rounded-full'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'hidden sm:block capitalize'}>
        <FlexContainer direction={DirectionOption.column} gap={GapOption.none}>
          <div className={''}>{name}</div>
          <div className={'text-xs'}>
            <span className={''}>{role.name}</span>
            <span> &#8226; </span>
            <span className={''}>{account.name}</span>
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};

export const DetailedLoggedInUser = (props: Props): ReactElement => {
  const {
    user: { name, avatar, email, account, role },
  } = props;
  return (
    <FlexContainer
      align={AlignOption.center}
      gap={GapOption.large}
      className={'text-sm no-underline'}>
      <img
        className={'h-20 w-20 rounded-full -ml-4'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'capitalize'}>
        <FlexContainer
          direction={DirectionOption.column}
          gap={GapOption.minimum}>
          <div className={''}>{name}</div>
          <div>
            <div className={'text-xs lowercase'}>{email}</div>
            <div className={'text-xs'}>
              <span className={''}>{role.name}</span>
              <span> &#8226; </span>
              <span className={''}>{account.name}</span>
            </div>
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};
