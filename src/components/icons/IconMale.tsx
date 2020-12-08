import Male from '~/assets/svg/male.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconMaleProps extends AppIconProps {}

const IconMale = (props: IconMaleProps) => (
  <AppIcon {...props}>
    <Male />
  </AppIcon>
);

IconMale.defaultProps = {
  className: '',
};

export default IconMale;
