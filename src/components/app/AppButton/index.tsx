import clsx from 'clsx';
import { PropsWithChildren } from 'react';
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
}

const AppButton = (props: PropsWithChildren<AppButtonProps>) => {
  const Tag = !props.to ? 'button' as any : Link;

  return (
    <Tag
      type={props.type}
      disabled={props.disabled}
      className={clsx(['app-button', {
        [`app-button__size--${props.size}`]: !!props.size,
        'app-button__icon': props.icon,
      }, props.className])}
    >
      {props.prepend && <div className="app-button__prepend">{ props.prepend }</div>}
      <div className="app-button__wrapper">{props.label || props.children}</div>
      &nbsp;
      {props.append && <div className="app-button__append">{ props.append }</div>}
    </Tag>
  );
};

AppButton.defaultProps = {
  type: 'button',
  size: 'small',
  disabled: false,
  label: '',
  className: '',
  icon: false,
};

export default AppButton;
