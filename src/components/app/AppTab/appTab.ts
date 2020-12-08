import { Dispatch, SetStateAction, VFC } from 'react';

interface AppTabNavigationItem {
  title: string;
  description?: string;
  tab: VFC;
}

export type AppTabNavigationItems = AppTabNavigationItem[];

export interface AppTabContextProps {
  tabIndex: number;
  onChange: (index: number) => void;
  completedTabs: number[];
  errorTabs: number[];
  setCompletedTabs: Dispatch<SetStateAction<number[]>>;
  setErrorTabs: Dispatch<SetStateAction<number[]>>;
  items: AppTabNavigationItems
}
