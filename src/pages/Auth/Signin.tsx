import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppFlash from '~/components/app/AppFlash';
import AppInput from '~/components/app/AppInput';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';
import { AppDispatch } from '~/store';
import { login } from '~/store/auth';
import { ILoginState } from '~/store/auth/auth.interface';
import { transformValidationError } from '~/utils';

const Signin = () => {
  const [formData, setFormData] = useState<ILoginState>({ username: '', password: '' });
  const [formError, setFormError] = useState<ILoginState>({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await dispatch(login(formData));
    } catch (error) {
      if (error.response.status === 422) {
        setFormError(transformValidationError(error.response.data));
      }
      setIsLoading(false);
    }
  };

  return (
    <form className="auth__form" onSubmit={onSubmit}>
      <div className="auth__heading text-center">
        <h1 className="auth__title">Hello!</h1>
        <p className="secondary">Welcome back, enter your details below</p>
      </div>

      <AppFlash className="mb-5" />

      <AppInput
        name="username"
        label="Email/Username"
        placeholder="michealolawa"
        value={formData.username}
        onChange={onChange}
        required
        hint={formError.username}
        hasError={!!formError.username}
      />
      <AppInput
        type="password"
        name="password"
        label="Password"
        placeholder="At least 8 characters"
        onChange={onChange}
        value={formData.password}
        hint={formError.password}
        hasError={!!formError.password}
        required
      />

      <div className="auth__action">
        <Link to="/" className="secondary text-underline">I forgot my password</Link>
      </div>

      <AppButton
        type="submit"
        size="big"
        label="Login"
        variant="primary"
        className="w-full auth__button--submit"
        disabled={isLoading}
        append={(
          <>
            <AppSpacer />
            <IconArrowEast />
          </>
        )}
        prepend={<AppSpacer />}
      />
    </form>
  );
};

export default Signin;
