import { createContext } from 'react';
import { AppCheckboxContextValue } from './appCheckbox.interface';

const AppCheckboxContext = createContext<AppCheckboxContextValue>(null);

export default AppCheckboxContext;
