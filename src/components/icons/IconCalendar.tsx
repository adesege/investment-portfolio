import Calendar from '~/assets/svg/calendar.svg';
import AppIcon from '../app/AppIcon';
import { AppIconProps } from '../app/AppIcon/AppIcon';

interface IconCalendarProps extends AppIconProps {}

const IconCalendar = (props: IconCalendarProps) => (
  <AppIcon {...props}>
    <Calendar />
  </AppIcon>
);

export default IconCalendar;
