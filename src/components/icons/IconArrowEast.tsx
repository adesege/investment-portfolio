import ArrowEast from '~/assets/svg/arrow-east.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconArrowEastProps extends AppIconProps {}

const IconArrowEast = (props: IconArrowEastProps) => (
  <AppIcon color={props.color}>
    <ArrowEast />
  </AppIcon>
);

export default IconArrowEast;
