import Invest from '~/assets/svg/invest.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconInvestProps extends AppIconProps {}

const IconInvest = (props: IconInvestProps) => (
  <AppIcon {...props}>
    <Invest />
  </AppIcon>
);

export default IconInvest;
