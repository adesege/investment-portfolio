import { useHistory } from 'react-router-dom';
import AppImg from '~/components/app/AppImg';
import AppSpacer from '~/components/app/AppSpacer';
import IconClose from '~/components/icons/IconClose';
import { IRoute } from '~/interfaces/route';

const Header = () => {
  const history = useHistory();

  const onCloseModal = () => {
    history.push(IRoute.dashboard);
  };

  return (
    <div className="dashboard-onboarding__header">
      <AppImg src="/logo-monochrome.png" alt="Monochrome logo" className="dashboard-onboarding__logo" />
      <p className="muted text-subheading">Your gateway to amazing investment opportunities</p>
      <AppSpacer />
      <div className="cursor-pointer" onClick={onCloseModal}>
        <IconClose size="x-large" className="justify-center mb-2" />
        <span className="muted">Close</span>
      </div>
    </div>
  );
};

export default Header;
