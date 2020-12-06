import VisibilityOn from '~/assets/svg/visibility-on.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconVisiblityOnProps extends AppIconProps {}

const IconVisiblityOn = (props: IconVisiblityOnProps) => (
  <AppIcon {...props}>
    <VisibilityOn />
  </AppIcon>
);

export default IconVisiblityOn;
