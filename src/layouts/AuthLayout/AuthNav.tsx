import { useLocation } from 'react-router-dom';
import AppButton from '~/components/app/AppButton';
import AppSpacer from '~/components/app/AppSpacer';
import { IRoute } from '~/interfaces/route';

const AuthNav = () => {
  const location = useLocation();

  const isSigninPage = location.pathname === '/auth/signin';
  const label = isSigninPage ? 'Don’t have an account yet?' : 'Already have an account?';
  const buttonLabel = isSigninPage ? 'Create Account' : 'Login';
  const route = isSigninPage ? IRoute.signup : IRoute.signin;

  return (
    <nav className="auth__nav">
      <AppSpacer />
      <span>{label}</span>
      <AppButton to={route} variant="secondary" className="auth__button--login">{buttonLabel}</AppButton>
    </nav>
  );
};

export default AuthNav;
