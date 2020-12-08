import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { AppTabNavigationItems } from './appTab';
import useTab from './useTab';

interface AppTabNavigationProps {
  items: AppTabNavigationItems
}

const AppTabNavigation = (props: PropsWithChildren<AppTabNavigationProps>) => {
  const { hasCompleted, hasError, isActive } = useTab();

  const getStatusClassName = (index: number) => {
    let className;
    if (isActive(index)) {
      className = 'app-tab-navigation__active';
    }
    if (hasCompleted(index)) {
      className = 'app-tab-navigation__completed';
    }
    if (hasError(index)) {
      className = 'app-tab-navigation__error';
    }

    return className;
  };
  return (
    <div className="app-tab-navigation">
      <nav>
        <ul className="app-tab-navigation__list">
          {props.items.map((item, index) => (
            <li
              key={item.title}
              className={clsx(['app-tab-navigation__item', getStatusClassName(index)])}
            >
              <span className={clsx(['app-tab-navigation__status', { 'app-tab-navigation__dashed': props.items.length !== index + 1 }])} />
              <div>
                <h1 className="app-tab-navigation__title text-body ma-0">{item.title}</h1>
                <p className="app-tab-navigation__description text-body muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AppTabNavigation;
