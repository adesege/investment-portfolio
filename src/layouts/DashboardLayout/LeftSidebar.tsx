import AppSpacer from '~/components/app/AppSpacer';
import IconHelp from '~/components/icons/IconHelp';
import IconHome from '~/components/icons/IconHome';
import IconInvest from '~/components/icons/IconInvest';
import IconPeople from '~/components/icons/IconPeople';
import IconSettings from '~/components/icons/IconSettings';
import IconWallet from '~/components/icons/IconWallet';
import SidebarNav from './SidebarNav';
import SidebarNavItem from './SidebarNavItem';

const LeftSidebar = () => {
  const links = [
    { text: 'Home', value: '/dashboard', icon: IconHome },
    { text: 'Invest', value: '/dashboard/invest', icon: IconInvest },
    { text: 'Wallet', value: '/dashboard/wallet', icon: IconWallet },
    { text: 'Settings', value: '/dashboard/settings', icon: IconSettings },
  ];

  return (
    <aside className="dashboard-layout__sidebar--left">
      <img alt="Logo" className="dashboard-layout__logo" src="/logo.png" />

      <SidebarNav>
        {links.map((link) => <SidebarNavItem key={link.text} {...link} />)}
      </SidebarNav>

      <AppSpacer />

      <SidebarNav className="dashboard-layout__nav--footer">
        <SidebarNavItem text="Tell a friend" value="/invite" icon={IconPeople} />
        <SidebarNavItem text="Get Help" value="/support" icon={IconHelp} className="dashboard-layout__support" />
      </SidebarNav>
    </aside>
  );
};

export default LeftSidebar;
