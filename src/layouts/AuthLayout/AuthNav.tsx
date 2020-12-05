import { Link, useLocation } from 'react-router-dom';
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
      <Link to={route} className="auth__button--login">{buttonLabel}</Link>
    </nav>
  );
};

export default AuthNav;
