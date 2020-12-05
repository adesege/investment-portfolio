import clsx from 'clsx';
import './AppInput.scss';

interface AppInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  append?: JSX.Element;
}

const AppInput = (props: AppInputProps) => (
  <div className={clsx(['app-input__group', props.className])}>
    <label htmlFor={props.name} className="app-input__label">{props.label}</label>

    <div className="app-input__wrapper">
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="app-input__input"
      />
      {props.append && <div className="app-input__append">{ props.append }</div>}
    </div>
  </div>
);

AppInput.defaultProps = {
  type: 'text',
  className: '',
  append: null,
};

export default AppInput;
