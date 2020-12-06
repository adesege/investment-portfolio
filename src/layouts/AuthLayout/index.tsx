import { PropsWithChildren } from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '~/hooks/use-auth';
import { IRoute } from '~/interfaces/route';
import './Auth.scss';
import AuthNav from './AuthNav';
import LeftSidebar from './LeftSidebar';

const AuthLayout = (props: PropsWithChildren<any>) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
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
