import { nanoid } from 'nanoid';
import {
  ChangeEvent, useContext, useEffect, useRef,
} from 'react';
import AppCheckboxContext from '../AppCheckbookGroup/AppCheckboxContext';
import './AppCheckbox.scss';

interface AppCheckboxProps {
  checked?:boolean;
  onChange?: (value: string) => void;
  name?: string;
  value?: string;
}

const AppCheckbox = (props: AppCheckboxProps) => {
  const idRef = useRef<string>();
  const ref = useRef<HTMLLabelElement>();

  const context = useContext(AppCheckboxContext);

  const onChange = props.onChange || context.onChange;

  useEffect(() => {
    idRef.current = `app-checkbox-${nanoid()}`;
  }, []);

  useEffect(() => {
    if (!context.mandatory || !context.group) return;

    const $inputs = ref.current.closest('.app-checkbox-group').querySelectorAll<HTMLInputElement>('.app-checkbox__input');
    const hasChecked = Array.from($inputs).find(($input) => $input.checked === true);
    if (!hasChecked) {
      $inputs.item(0).checked = true;
    }
  }, [context.mandatory, context.group]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (context.group) {
      ref.current.querySelector<HTMLInputElement>(`[name="${props.name}"]`).checked = false;
    }
    const value = props.checked && !context.mandatory ? '' : event.target.value;
    onChange(value);
  };

  return (
    <label ref={ref} htmlFor={idRef.current} className="app-checkbox">
      <input
        type="checkbox"
        name={props.name}
        id={idRef.current}
        className="app-checkbox__input"
        onChange={onInputChange}
        checked={props.checked}
        value={props.value}
      />
      <span className="app-checkbox__custom" />
    </label>
  );
};

AppCheckbox.defaultProps = {
  checked: false,
  name: '',
  value: '',
  onChange: null,
};

export default AppCheckbox;