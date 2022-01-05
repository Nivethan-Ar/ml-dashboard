/* eslint-disable @typescript-eslint/no-unused-vars */
import NavItem from './NavItem';
import NavCardItem from './NavCardItem';
import DashboardIcon from '../../../assets/icons/nav/latest/Dashboards.svg';
import ManageIcon from '../../../assets/icons/nav/latest/Manage.svg';
import OrderManageIcon
  from '../../../assets/icons/nav/latest/Order-Management.svg';
import CustomersIcon from '../../../assets/icons/nav/latest/Customers.svg';
import RoutesIcon from '../../../assets/icons/nav/latest/Routes&Visits.svg';
import TasksIcon from '../../../assets/icons/nav/latest/Tasks&Surveys.svg';
import FundsIcon from '../../../assets/icons/nav/latest/Funds.svg';
import CatalogueIcon from '../../../assets/icons/nav/latest/Catalogue.svg';
import ReportsIcon from '../../../assets/icons/nav/latest/Reports.svg';
import HappinessIcon from '../../../assets/icons/nav/latest/happiness.png';
import MessageIcon from '../../../assets/icons/nav/latest/message.png';

const Navigation = () => (
  <nav className="text-gray-500 ">
    <ul className="flex flex-col gap-7">
      <NavCardItem link="/dashboard" />
      <NavItem link="/home" icon={DashboardIcon} label="Home" />
      <NavItem link="/" icon={HappinessIcon} label="Manage" />
      <NavItem link="/" icon={OrderManageIcon} label="Products" />
      <NavItem link="/" icon={ReportsIcon} label="Invoices" />
      <NavItem link="/" icon={MessageIcon} label="Messages" />
      <NavItem link="/" icon={TasksIcon} label="Calender" />
      {/* <NavItem link="/" icon={FundsIcon} label="Funds" /> */}
      <NavItem link="/" icon={CustomersIcon} label="Customers" />
      {/* <NavItem link="/" icon={CatalogueIcon} label="Catalogue" /> */}
      <NavItem link="/manage" icon={ManageIcon} label="Settings" />

    </ul>
  </nav>
);

export default Navigation;
