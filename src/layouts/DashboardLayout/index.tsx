import { PropsWithChildren } from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '~/hooks/use-auth';
import { IRoute } from '~/interfaces/route';
import './DashboardLayout.scss';
import Header from './Header';
import LeftSidebar from './LeftSidebar';

const DashboardLayout = (props: PropsWithChildren<any>) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={IRoute.signin} />;
  }

  return (
    <div className="dashboard-layout">
      <LeftSidebar />

      <div className="dashboard-layout__content">
        <Header />

        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
