import useAuth from '~/hooks/use-auth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <section>
      <div>
        <h1>
          Welcome
          {' '}
          {user.firstname}
        </h1>
      </div>
    </section>
  );
};

export default Dashboard;
