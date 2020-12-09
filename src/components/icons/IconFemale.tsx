import Female from '~/assets/svg/female.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconFemaleProps extends AppIconProps {}

const IconFemale = (props: IconFemaleProps) => (
  <AppIcon {...props}>
    <Female />
  </AppIcon>
);

IconFemale.defaultProps = {
  className: '',
};

export default IconFemale;
