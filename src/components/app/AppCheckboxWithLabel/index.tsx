import { PropsWithChildren, VFC } from 'react';
import AppCheckbox from '../AppCheckbox';
import { AppCheckboxProps } from '../AppCheckbox/appCheckbox';
import AppSpacer from '../AppSpacer';
import './AppCheckboxWithLabel.scss';

interface AppCheckboxWithLabelProps extends AppCheckboxProps {
  icon?: VFC;
  label?: string;
}

const AppCheckboxWithLabel = (props: PropsWithChildren<AppCheckboxWithLabelProps>) => (
  <div className="app-checkbox-label">

    <div className="app-checkbox-label__wrapper">
      <AppCheckbox {...props} />
      <span className="app-checkbox-label__label">{props.label}</span>
    </div>
    <AppSpacer />
    {props.icon && <props.icon />}
  </div>
);

export default AppCheckboxWithLabel;
