import Wallet from '~/assets/svg/wallet.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconWalletProps extends AppIconProps {}

const IconWallet = (props: IconWalletProps) => (
  <AppIcon color={props.color}>
    <Wallet />
  </AppIcon>
);

export default IconWallet;
