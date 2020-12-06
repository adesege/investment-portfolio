import clsx from 'clsx';
import { VFC } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarNavItemProps {
  text: string;
  value: string;
  icon: VFC;
  className?: string;
}

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const Icon = props.icon;

  return (
    <li className={clsx(['dashboard-layout__item', props.className])}>
      <NavLink exact className="dashboard-layout__link" to={props.value}>
        <Icon />
        <span className="dashboard-layout__link--text">
          {props.text}
        </span>
      </NavLink>
    </li>
  );
};

SidebarNavItem.defaultProps = {
  className: '',
};

export default SidebarNavItem;
