import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppInput from '~/components/app/AppInput';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';
import IconVisiblityOff from '~/components/icons/IconVisiblityOff';
import IconVisiblityOn from '~/components/icons/IconVisiblityOn';

interface TogglePasswordVisibilityProps {
  isVisible: boolean;
  onClick: (isVisible: boolean) => void
}

const TogglePasswordVisibility = (props: TogglePasswordVisibilityProps) => (
  <span onClick={() => props.onClick(!props.isVisible)} className="cursor-pointer">
    {!props.isVisible ? <IconVisiblityOn /> : <IconVisiblityOff />}
  </span>
);

const Signup = () => {
  const [isPasswordVisible, setPasswordVisiblity] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (

    <form className="auth__form" onSubmit={onSubmit}>
      <div className="auth__heading text-center">
        <h1 className="auth__title text-center">Gain financial freedom by simply investing</h1>
      </div>

      <AppInput type="email" name="email" label="Email" placeholder="e.g michealolawale@gmail.com" />
      <AppInput name="username" label="Username" placeholder="e.g mikeola" />
      <div className="auth__group--name">
        <AppInput name="firstName" label="First name" placeholder="e.g mikeola" className="auth__name--column" />
        <AppInput name="lastName" label="Last name" placeholder="e.g Olawale" className="auth__name--column" />
      </div>
      <AppInput
        type={isPasswordVisible ? 'text' : 'password'}
        name="password"
        label="Password"
        placeholder="At least 8 characters"
        append={(
          <TogglePasswordVisibility
            onClick={setPasswordVisiblity}
            isVisible={isPasswordVisible}
          />
            )}
      />

      <AppButton
        type="submit"
        size="big"
        label="Create My Free Account"
        className="primary--bg w-full justify-between auth__button--submit"
        append={<IconArrowEast color="white" />}
        prepend={<AppSpacer />}
      />

      <p className="text-center muted text-subtitle">
        By creating, you agree to Afrinvestor
        {' '}
        <Link to="/" className="primary">Terms of service</Link>
        {' '}
        and
        {' '}
        <Link to="/" className="primary">Privacy policy</Link>
      </p>
    </form>
  );
};

export default Signup;
