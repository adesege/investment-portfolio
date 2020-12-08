import ArrowWest from '~/assets/svg/arrow-west.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconArrowWestProps extends AppIconProps {}

const IconArrowWest = (props: IconArrowWestProps) => (
  <AppIcon {...props}>
    <ArrowWest />
  </AppIcon>
);

export default IconArrowWest;
