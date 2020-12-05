import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppInput from '~/components/app/AppInput';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';

const Signin = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (

    <form className="auth__form" onSubmit={onSubmit}>
      <div className="auth__heading text-center">
        <h1 className="auth__title">Hello!</h1>
        <p className="secondary">Welcome back, enter your details below</p>
      </div>

      <AppInput name="identifier" label="Email/Username" placeholder="michealolawa" />
      <AppInput
        type="password"
        name="password"
        label="Password"
        placeholder="At least 8 characters"
      />

      <div className="auth__action">
        <Link to="/" className="secondary text-underline">I forgot my password</Link>
      </div>

      <AppButton
        type="submit"
        size="big"
        label="Login"
        className="primary--bg w-full justify-between auth__button--submit"
        append={<IconArrowEast color="white" />}
        prepend={<AppSpacer />}
      />
    </form>
  );
};

export default Signin;
