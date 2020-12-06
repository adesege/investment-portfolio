import NotificationBell from '~/assets/svg/notification-bell.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconNotificationBellProps extends AppIconProps {}

const IconNotificationBell = (props: IconNotificationBellProps) => (
  <AppIcon {...props}>
    <NotificationBell />
  </AppIcon>
);

export default IconNotificationBell;
