import clsx from 'clsx';
import { ChangeEvent } from 'react';
import './AppInput.scss';

interface AppInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  append?: JSX.Element;
  value?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  hasError?: boolean;
}

const AppInput = (props: AppInputProps) => (
  <div className={clsx(['app-input__group', props.className, { 'app-input__error': props.hasError }])}>
    <label htmlFor={props.name} className="app-input__label">{props.label}</label>

    <div className="app-input__wrapper">
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="app-input__input"
        value={props.value}
        required={props.required}
        onChange={props.onChange}
      />
      {props.append && <div className="app-input__append">{ props.append }</div>}
    </div>
    {props.hint && <p className="app-input__hint">{props.hint}</p>}
  </div>
);

AppInput.defaultProps = {
  type: 'text',
  className: '',
  append: null,
  value: '',
  required: false,
  onChange: null,
  hasError: false,
  hint: '',
};

export default AppInput;
