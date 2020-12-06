import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface SidebarNavProps {
  className?: string;
}

const SidebarNav = (props: PropsWithChildren<SidebarNavProps>) => (
  <nav className={clsx(['dashboard-layout__nav', props.className])}>
    <ul className="dashboard-layout__list">
      {props.children}
    </ul>
  </nav>
);

export default SidebarNav;
