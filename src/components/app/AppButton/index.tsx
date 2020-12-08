import clsx from 'clsx';
import {
  ChangeEventHandler, ForwardedRef, forwardRef, PropsWithChildren, ReactNode,
} from 'react';
import { Link } from 'react-router-dom';
import './AppButton.scss';

interface AppButtonProps {
  append?: JSX.Element;
  prepend?: JSX.Element;
  label?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'big' | 'small';
  disabled?: boolean;
  icon?: boolean;
  to?: string;
  variant?: 'primary' | 'secondary';
  onClick?: ChangeEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const AppButton = forwardRef((
  props: PropsWithChildren<AppButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const Tag = !props.to ? 'button' as any : Link;

  return (
    <Tag
      ref={ref}
      type={props.type}
      disabled={props.disabled}
      to={props.to}
      onClick={props.onClick}
      className={clsx(['app-button', {
        [`app-button__size--${props.size}`]: !!props.size,
        'app-button__icon': props.icon,
        [`app-button__${props.variant}`]: !!props.variant,
        'app-button__tag--anchor': !!props.to,
        'app-button__tag--button': !props.to,
      }, props.className])}
    >
      {props.prepend && props.prepend }
      <div className="app-button__wrapper">{props.label || props.children}</div>

      {props.append && props.append }
    </Tag>
  );
});

AppButton.defaultProps = {
  type: 'button',
  size: 'small',
  disabled: false,
  label: '',
  className: '',
  icon: false,
};

export default AppButton;
