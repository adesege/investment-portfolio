import {
  PropsWithChildren, Suspense, useState,
} from 'react';
import AppLoader from '../AppLoader';
import { AppTabNavigationItems } from './appTab';
import './AppTab.scss';
import AppTabContext from './AppTabContext';
import AppTabItem from './AppTabItem';
import AppTabNavigation from './AppTabNavigation';

interface AppTabProps {
  items: AppTabNavigationItems
}

const AppTab = (props: PropsWithChildren<AppTabProps>) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [completedTabs, setCompletedTabs] = useState<number[]>([]);
  const [errorTabs, setErrorTabs] = useState<number[]>([]);

  const activeTab = props.items[tabIndex];

  return (
    <AppTabContext.Provider value={{
      onChange: setTabIndex,
      tabIndex,
      completedTabs,
      setCompletedTabs,
      setErrorTabs,
      errorTabs,
      items: props.items,
    }}
    >
      <div className="app-tab h-full d-inline-block">
        <AppTabNavigation items={props.items} />

        <AppTabItem>
          <Suspense fallback={<AppLoader center />}>
            <activeTab.tab />
          </Suspense>
        </AppTabItem>
      </div>
    </AppTabContext.Provider>
  );
};

export default AppTab;
