import Help from '~/assets/svg/help.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconHelpProps extends AppIconProps {}

const IconHelp = (props: IconHelpProps) => (
  <AppIcon color={props.color}>
    <Help />
  </AppIcon>
);

export default IconHelp;
