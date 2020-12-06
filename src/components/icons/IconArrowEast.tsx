import ArrowEast from '~/assets/svg/arrow-east.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconArrowEastProps extends AppIconProps {}

const IconArrowEast = (props: IconArrowEastProps) => (
  <AppIcon {...props}>
    <ArrowEast />
  </AppIcon>
);

export default IconArrowEast;
