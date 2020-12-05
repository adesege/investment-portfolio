import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IRoute } from '~/interfaces/route';
import { RootState } from '~/store';
import { AuthState } from '~/store/auth/auth.interface';
import './Auth.scss';
import AuthNav from './AuthNav';
import LeftSidebar from './LeftSidebar';

const AuthLayout = (props: PropsWithChildren<any>) => {
  const authUser = useSelector<RootState, AuthState>((state) => state.auth);

  if (authUser.isAuthenticated) {
    return <Redirect to={IRoute.main} />;
  }

  return (
    <div className="auth__container">
      <LeftSidebar />
      <section className="auth__content">

        <AuthNav />

        <div className="auth-layout__content">
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
