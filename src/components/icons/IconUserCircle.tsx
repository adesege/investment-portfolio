import UserCircle from '~/assets/svg/user-circle.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconUserCircleProps extends AppIconProps {}

const IconUserCircle = (props: IconUserCircleProps) => (
  <AppIcon {...props}>
    <UserCircle />
  </AppIcon>
);

export default IconUserCircle;
