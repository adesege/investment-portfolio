import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { AppIconProps } from './AppIcon';

const AppIcon = (props: PropsWithChildren<AppIconProps>) => (
  <span
    className={clsx(['icon', {
      [`icon__size--${props.size}`]: !!props.size,
      [`${props.color}--icon`]: !!props.color,
    }])}
  >
    {props.children}
  </span>
);

AppIcon.defaultProps = {
  size: 'small',
  color: null,
};

export default AppIcon;
