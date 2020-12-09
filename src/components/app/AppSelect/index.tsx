import clsx from 'clsx';
import {
  ChangeEventHandler, useEffect, useRef, useState,
} from 'react';
import { clickOutsideListener } from '~/utils';
import './AppSelect.scss';

type AppSelectOptionType = {text: string; value: string;};

interface AppSelectProps {
  label?: string;
  name?: string;
  value?: string;
  hint?: string;
  hasError?:boolean;
  placeholder?: string;
  items: AppSelectOptionType[];
  onChange?: ChangeEventHandler<HTMLSelectElement>
}

const AppSelect = (props: AppSelectProps) => {
  const ref = useRef<HTMLDivElement>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<AppSelectOptionType>({ text: '', value: '' });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onToggleSelect = () => setIsOpen(!isOpen);

  const id = `app-select-${props.name}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onOptionClick = (index: number) => {
    setSelectedIndex(() => index);
    setSelectedOption(() => props.items[index]);

    props.onChange({ target: { name: props.name, value: props.items[index].value } } as any);

    setIsOpen(false);
  };

  useEffect(() => {
    const closeAllSelect = clickOutsideListener(ref.current, () => setIsOpen(false));

    document.addEventListener('click', closeAllSelect);

    return () => document.removeEventListener('click', closeAllSelect);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const index = props.items.findIndex((item) => item.value === props.value);
    if (index < 0) return;

    setSelectedIndex(() => index);
    setSelectedOption(() => props.items[index]);
  }, [props.items, props.value]);

  return (
    <div
      ref={ref}
      aria-haspopup="listbox"
      className={clsx(['app-select app-input__group', { 'app-select__error': props.hasError, 'app-select--open': isOpen }])}
    >
      <label className="app-select__label text-body secondary ma-0 d-block" htmlFor={id}>{props.label}</label>
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onClick={onToggleSelect}
        className={clsx(['app-select__selected', { 'app-select__placeholder': !!selectedOption }])}
        aria-live="polite"
        aria-label="unselected listbox"
      >
        {(selectedOption && selectedOption.text) || props.placeholder}
      </div>
      <ul className="app-select__options" role="listbox">
        {props.items.map((item, index) => (
          <li
            key={item.text}
            onClick={() => onOptionClick(index)}
            role="option"
            aria-selected={selectedIndex === index}
            className={clsx(['app-select__option', { 'app-select__option--selected': selectedIndex === index }])}
          >
            {item.text}
          </li>
        ))}
      </ul>
      {props.hint && <p className="app-select__hint">{props.hint}</p>}
    </div>
  );
};

AppSelect.defaultProps = {
  value: '',
  onChange: null,
  label: '',
  name: '',
  placeholder: '',
  hint: '',
  hasError: false,
};

export default AppSelect;
