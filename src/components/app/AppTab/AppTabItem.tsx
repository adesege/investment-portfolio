import { PropsWithChildren } from 'react';

const AppTabItem = (props: PropsWithChildren<any>) => (
  <div className="app-tab-item">
    {props.children}
  </div>
);

export default AppTabItem;
