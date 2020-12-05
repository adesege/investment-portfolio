import { useLocation } from 'react-router-dom';

const LeftSidebar = () => {
  const location = useLocation();

  const isSigninPage = location.pathname === '/auth/signin';

  const bannerSrc = isSigninPage ? '/lady-with-phone.png' : '/guy-with-money.png';
  const bannerAlt = isSigninPage ? 'Lady with phone' : 'Guy with money';

  return (
    <aside className="auth__sidebar--left">
      <img alt="Logo" className="auth__logo" src="/logo.png" />
      <img alt={bannerAlt} className="auth__banner" src={bannerSrc} />
    </aside>

  );
};

export default LeftSidebar;
