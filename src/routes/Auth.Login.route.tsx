import { FlexContainer } from '~/components/flex/flex-container.tsx';
import { Form, useNavigation } from 'react-router-dom';
import {
  AlignOption,
  ButtonStyle,
  ButtonType,
  DirectionOption,
  GapOption,
  JustifyOption,
  WidthOption,
} from '~/components/ui-utils/styles.utils.ts';
import { clsx } from 'clsx';
import { ErrorAlert } from '~/components/alerts/error-alert.tsx';
import { loginRoute } from '~/utils/routes.utils.ts';
import { InputField } from '~/components/form-fields/input-field.tsx';
import { InputType } from '~/components/ui-utils/enums.ts';
import { Button } from '~/components/button/button.tsx';
import { SendIcon } from '~/components/svg-icons/send-icon.tsx';

export const AuthLoginRoute = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <FlexContainer
      direction={DirectionOption.column}
      align={AlignOption.start}
      justify={JustifyOption.between}
      width={WidthOption.full}
      className={''}>
      <FlexContainer
        direction={DirectionOption.column}
        width={WidthOption.full}
        gap={GapOption.maximum}
        className={'py-4'}>
        <div>
          <h1 className={clsx('text-2xl font-bold')}>Welcome to Bims</h1>
          <p>Sign in to your account to get started</p>
        </div>

        {Math.random() * 10 > 4 && <ErrorAlert message={'error.message'} />}

        <Form method={'post'} action={loginRoute()} className={'w-full'}>
          <FlexContainer
            width={WidthOption.full}
            direction={DirectionOption.column}
            gap={GapOption.large}
            align={AlignOption.center}>
            <InputField
              type={InputType.email}
              label={'Email address'}
              name={'email'}
            />
            <InputField
              type={InputType.password}
              label={'Password'}
              name={'password'}
            />
            <Button
              type={ButtonType.submit}
              style={ButtonStyle.primary}
              isDisabled={isSubmitting}
              className={'mt-8'}>
              <FlexContainer
                direction={DirectionOption.row}
                gap={GapOption.maximum}
                align={AlignOption.center}
                justify={JustifyOption.center}>
                <SendIcon />
                <span className={'font-bold'}>
                  {isSubmitting ? 'Logging in...' : 'Sign in'}
                </span>
              </FlexContainer>
            </Button>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </FlexContainer>
  );
};
