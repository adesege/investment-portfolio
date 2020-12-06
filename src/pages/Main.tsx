import { Redirect } from 'react-router-dom';
import useAuth from '~/hooks/use-auth';
import { IRoute } from '~/interfaces/route';

const Main = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={IRoute.signin} />;
  }

  return <Redirect to={IRoute.dashboard} />;
};

export default Main;
