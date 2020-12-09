import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface AppInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  append?: JSX.Element;
  prepend?: JSX.Element | string;
  prependDivider?: boolean;
  value?: string;
  required?: boolean;
  onChange?:ChangeEventHandler<HTMLInputElement>;
  onInput?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  hint?: string;
  hasError?: boolean;
  readonly?: boolean;
}
