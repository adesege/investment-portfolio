import AppAvatar from '~/components/app/AppAvatar';
import AppButton from '~/components/app/AppButton';
import AppSpacer from '~/components/app/AppSpacer';
import IconNotificationBell from '~/components/icons/IconNotificationBell';
import './Header.scss';

const Header = () => (
  <header className="dl-header">
    <AppSpacer />

    <nav className="dl-header__nav">
      <AppButton icon><IconNotificationBell size="large" /></AppButton>
      <AppButton icon><AppAvatar src="/avatar.svg" /></AppButton>
    </nav>
  </header>
);

export default Header;
