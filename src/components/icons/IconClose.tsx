import Close from '~/assets/svg/close.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconCloseProps extends AppIconProps {}

const IconClose = (props: IconCloseProps) => (
  <AppIcon {...props}>
    <Close />
  </AppIcon>
);

IconClose.defaultProps = {
  className: '',
};

export default IconClose;
