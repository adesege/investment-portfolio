import { useContext } from 'react';
import { AppTabContextProps } from './appTab';
import AppTabContext from './AppTabContext';

type UseTabType = AppTabContextProps & {
  onSetCompletedTab: (index: number) => void;
  onSetErrorTab: (index: number) => void;
  hasError: (index: number) => boolean;
  hasCompleted: (index: number) => boolean;
  isActive: (index: number) => boolean;
  isFirstTab: boolean;
};

const useTab = (): UseTabType => {
  const context = useContext(AppTabContext);

  if (!context) {
    throw new Error(`useTab must be used within a ${AppTabContext.displayName} provider`);
  }
  const {
    errorTabs,
    setCompletedTabs,
    completedTabs,
    setErrorTabs,
    tabIndex,
  } = context;

  const onSetCompletedTab = (index: number) => {
    const hasError = errorTabs.includes(index);
    if (hasError) {
      setErrorTabs(() => errorTabs.filter((item) => item !== index));
    }
    setCompletedTabs(() => Array.from(new Set([...completedTabs, index])));
  };

  const onSetErrorTab = (index: number) => {
    const isCompleted = completedTabs.includes(index);
    if (isCompleted) {
      setCompletedTabs(() => completedTabs.filter((item) => item !== index));
    }

    setErrorTabs(() => Array.from(new Set([...errorTabs, index])));
  };

  const hasError = (index: number) => errorTabs.includes(index);
  const hasCompleted = (index: number) => completedTabs.includes(index);
  const isActive = (index: number) => tabIndex === index;
  const isFirstTab = tabIndex === 0;

  return {
    ...context,
    onSetCompletedTab,
    onSetErrorTab,
    hasError,
    hasCompleted,
    isActive,
    isFirstTab,
  };
};

export default useTab;
