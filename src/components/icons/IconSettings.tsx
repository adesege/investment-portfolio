import Settings from '~/assets/svg/settings.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconSettingsProps extends AppIconProps {}

const IconSettings = (props: IconSettingsProps) => (
  <AppIcon {...props}>
    <Settings />
  </AppIcon>
);

export default IconSettings;
