import NavItem from './NavItem';
import DashboardIcon from '../../../assets/icons/nav/latest/Dashboards.svg';
import ManageIcon from '../../../assets/icons/nav/latest/Manage.svg';
import OrderManageIcon
  from '../../../assets/icons/nav/latest/Order-Management.svg';
import CustomersIcon from '../../../assets/icons/nav/latest/Customers.svg';
// import RoutesIcon from '../../../assets/icons/nav/latest/Routes&Visits.svg';
// import TasksIcon from '../../../assets/icons/nav/latest/Tasks&Surveys.svg';
// import FundsIcon from '../../../assets/icons/nav/latest/Funds.svg';
// import CatalogueIcon from '../../../assets/icons/nav/latest/Catalogue.svg';
// import ReportsIcon from '../../../assets/icons/nav/latest/Reports.svg';

const Navigation = () => (
  <nav className="text-gray-500 ">
    <ul className="flex flex-col gap-6">
      <NavItem link="/" icon={DashboardIcon} label="DashBoard" />
      <NavItem link="/manage" icon={ManageIcon} label="Manage" />
      <NavItem link="/" icon={OrderManageIcon} label="Order" />
      <NavItem link="/" icon={CustomersIcon} label="Customers" />
    </ul>
  </nav>
);

export default Navigation;
