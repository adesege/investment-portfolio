import * as Pikaday from 'pikaday';
import {
  ChangeEvent,

  PropsWithChildren, useEffect, useMemo, useRef,
} from 'react';
import IconCalendar from '~/components/icons/IconCalendar';
import { clickOutsideListener } from '~/utils';
import AppButton from '../AppButton';
import AppInput from '../AppInput';
import { AppInputProps } from '../AppInput/appInput';
import './AppDatePicker.scss';

interface AppDatePickerProps extends AppInputProps {

}

const AppDatePicker = (props: PropsWithChildren<AppDatePickerProps>) => {
  const ref = useRef<HTMLDivElement>();

  const picker: Pikaday = useMemo(() => new Pikaday({
    defaultDate: props.value ? new Date(props.value) : undefined,
    setDefaultDate: !!props.value,
    onSelect: () => {
      const $input = ref.current.querySelector('input');
      $input.value = picker.toString();
      $input.dispatchEvent(new Event('input', { bubbles: true }));
    },
  }), [props.value]);

  useEffect(() => {
    ref.current.append(picker.el);
    picker.hide();

    const handler = clickOutsideListener(ref.current, () => picker.hide());
    document.addEventListener('click', handler);

    return () => {
      picker.destroy();
      document.removeEventListener('click', handler);
    };
  }, [picker]);

  const onToggle = (event: MouseEvent | ChangeEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (picker.isVisible()) {
      return picker.hide();
    }
    return picker.show();
  };

  return (
    <AppInput
      ref={ref}
      className="app-datepicker"
      onClick={onToggle}
      {...props}
      value={props.value}
      append={<AppButton icon type="button" onClick={onToggle}><IconCalendar /></AppButton>}
      onInput={props.onInput}
      readonly
    />
  );
};

export default AppDatePicker;
