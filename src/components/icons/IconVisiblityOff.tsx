import VisibilityOff from '~/assets/svg/visibility-off.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconVisiblityOffProps extends AppIconProps {}

const IconVisiblityOff = (props: IconVisiblityOffProps) => (
  <AppIcon {...props}>
    <VisibilityOff />
  </AppIcon>
);

export default IconVisiblityOff;
