import { PropsWithChildren } from 'react';
import './Auth.scss';
import AuthNav from './AuthNav';
import LeftSidebar from './LeftSidebar';

const AuthLayout = (props: PropsWithChildren<any>) => (
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

export default AuthLayout;
