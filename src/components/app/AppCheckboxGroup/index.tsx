import clsx from 'clsx';
import {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import { AppCheckboxContextValue } from './appCheckbox.interface';
import AppCheckboxContext from './AppCheckboxContext';
import './AppCheckboxGroup.scss';

interface AppCheckboxGroupProps extends AppCheckboxContextValue {
  className?: string;
  hint?: string;
  hasError?: boolean;
}

const AppCheckboxGroup = (props: PropsWithChildren<AppCheckboxGroupProps>) => {
  const [hasCheckboxLabel, setHasCheckboxLabel] = useState(false);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    setHasCheckboxLabel(!!ref.current.querySelector('.app-checkbox-label'));
  }, []);

  return (
    <AppCheckboxContext.Provider value={{
      onChange: props.onChange,
      group: props.group,
      mandatory: props.mandatory,
    }}
    >
      <div
        ref={ref}
        className={clsx([
          'd-inline-block app-checkbox-group',
          props.className,
          {
            'app-checkbox-group--with-label': hasCheckboxLabel,
            'app-checkbox-group--error': props.hasError,
          }])}
      >
        <div className="d-inline-block app-checkbox-group__wrapper">{props.children}</div>
        {props.hint && <p className="app-checkbox-group__hint">{props.hint}</p>}
      </div>
    </AppCheckboxContext.Provider>
  );
};

AppCheckboxGroup.defaultProps = {
  group: false,
};

export default AppCheckboxGroup;
