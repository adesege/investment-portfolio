import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { AppInputProps } from './appInput';
import './AppInput.scss';

const AppInput = forwardRef((props: AppInputProps, ref: ForwardedRef<HTMLDivElement>) => {
  const prepend = props.prepend && typeof props.prepend === 'string' ? <span>{props.prepend}</span> : props.prepend;

  return (
    <div ref={ref} onClick={props.onClick} className={clsx(['app-input__group', props.className, { 'app-input__error': props.hasError }])}>
      <label htmlFor={props.name} className="app-input__label">{props.label}</label>

      <div className="app-input__wrapper">
        {props.prepend && (
        <div className={clsx([
          'app-input__prepend',
          { 'app-input__prepend--divider': props.prependDivider },
        ])}
        >
          { prepend }
        </div>
        )}

        <input
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          className="app-input__input"
          value={props.value}
          required={props.required}
          onInput={props.onInput}
          onChange={props.onChange}
          readOnly={props.readonly}
        />
        {props.append && <div className="app-input__append">{ props.append }</div>}
      </div>
      {props.hint && <p className="app-input__hint">{props.hint}</p>}
    </div>
  );
});

AppInput.defaultProps = {
  type: 'text',
  className: '',
  append: null,
  prepend: null,
  value: '',
  required: false,
  onChange: null,
  hasError: false,
  hint: '',
  prependDivider: false,
};

export default AppInput;
