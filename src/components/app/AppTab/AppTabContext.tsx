import { createContext } from 'react';
import { AppTabContextProps } from './appTab';

const AppTabContext = createContext<AppTabContextProps>(undefined);

export default AppTabContext;
