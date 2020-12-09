import { createContext } from 'react';
import { AppCheckboxContextValue } from './appCheckbox.interface';

const AppCheckboxContext = createContext<AppCheckboxContextValue>({
  group: false,
  mandatory: false,
  onChange: null,
});

export default AppCheckboxContext;
