import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppFlash from '~/components/app/AppFlash';
import AppInput from '~/components/app/AppInput';
import AppSpacer from '~/components/app/AppSpacer';
import IconArrowEast from '~/components/icons/IconArrowEast';
import IconVisiblityOff from '~/components/icons/IconVisiblityOff';
import IconVisiblityOn from '~/components/icons/IconVisiblityOn';
import { AppDispatch } from '~/store';
import { register } from '~/store/auth';
import { ISignupState } from '~/store/auth/auth.interface';
import { transformValidationError } from '~/utils';

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
  const [formData, setFormData] = useState<ISignupState>({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
  });
  const [formError, setFormError] = useState<ISignupState>({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisiblity] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await dispatch(register(formData));
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
        <h1 className="auth__title text-center">Gain financial freedom by simply investing</h1>
      </div>

      <AppFlash className="mb-5" />

      <AppInput
        type="email"
        name="email"
        label="Email"
        placeholder="e.g michealolawale@gmail.com"
        onChange={onChange}
        value={formData.email}
        hint={formError.email}
        hasError={!!formError.email}
        required
      />
      <AppInput
        name="username"
        label="Username"
        placeholder="e.g mikeola"
        onChange={onChange}
        value={formData.username}
        hint={formError.username}
        hasError={!!formError.username}
        required
      />
      <div className="auth__group--name">
        <AppInput
          name="firstname"
          label="First name"
          placeholder="e.g mikeola"
          className="auth__name--column"
          onChange={onChange}
          value={formData.firstname}
          hint={formError.firstname}
          hasError={!!formError.firstname}
          required
        />
        <AppInput
          name="lastname"
          label="Last name"
          placeholder="e.g Olawale"
          className="auth__name--column"
          onChange={onChange}
          value={formData.lastname}
          hint={formError.lastname}
          hasError={!!formError.lastname}
          required
        />
      </div>
      <AppInput
        type={isPasswordVisible ? 'text' : 'password'}
        name="password"
        label="Password"
        placeholder="At least 8 characters"
        onChange={onChange}
        value={formData.password}
        hint={formError.password}
        hasError={!!formError.password}
        required
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
