import { PropsWithChildren } from 'react';
import { AppCheckboxContextValue } from './appCheckbox.interface';
import AppCheckboxContext from './AppCheckboxContext';

interface AppCheckboxGroupProps extends AppCheckboxContextValue {}

const AppCheckboxGroup = (props: PropsWithChildren<AppCheckboxGroupProps>) => (
  <AppCheckboxContext.Provider value={{
    onChange: props.onChange,
    group: props.group,
    mandatory: props.mandatory,
  }}
  >
    <div className="d-inline-block app-checkbox-group">{props.children}</div>
  </AppCheckboxContext.Provider>
);

AppCheckboxGroup.defaultProps = {
  group: false,
};

export default AppCheckboxGroup;
