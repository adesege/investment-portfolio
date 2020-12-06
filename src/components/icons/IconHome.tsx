import Home from '~/assets/svg/home.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconHomeProps extends AppIconProps {}

const IconHome = (props: IconHomeProps) => (
  <AppIcon {...props}>
    <Home />
  </AppIcon>
);

export default IconHome;
