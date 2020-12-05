import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import './AppButton.scss';

interface AppButtonProps {
  append?: JSX.Element;
  prepend?: JSX.Element;
  label: string;
  className: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'big' | 'small'
}

const AppButton = (props: PropsWithChildren<AppButtonProps>) => (
  <button type={props.type} className={clsx(['app-button', { [`app-button__size--${props.size}`]: !!props.size }, props.className])}>
    {props.prepend && <div className="app-button__prepend">{ props.prepend }</div>}
    <div className="app-button__wrapper">{props.label || props.children}</div>
    {props.append && <div className="app-button__append">{ props.append }</div>}
  </button>
);

AppButton.defaultProps = {
  type: 'button',
  size: 'small',
};

export default AppButton;
