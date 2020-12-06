import People from '~/assets/svg/people.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconPeopleProps extends AppIconProps {}

const IconPeople = (props: IconPeopleProps) => (
  <AppIcon color={props.color}>
    <People />
  </AppIcon>
);

export default IconPeople;
