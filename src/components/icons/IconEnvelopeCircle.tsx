import EnvelopeCircle from '~/assets/svg/envelope-circle.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconEnvelopeCircleProps extends AppIconProps {}

const IconEnvelopeCircle = (props: IconEnvelopeCircleProps) => (
  <AppIcon {...props}>
    <EnvelopeCircle />
  </AppIcon>
);

export default IconEnvelopeCircle;
