import NavItem from './NavItem';
import NavSubItem from './NavSubItem';

import DashboardIcon from '../../../assets/icons/nav/latest/Dashboards.svg';
import ManageIcon from '../../../assets/icons/nav/latest/Manage.svg';
import OrderManageIcon
  from '../../../assets/icons/nav/latest/Order-Management.svg';
import CustomersIcon from '../../../assets/icons/nav/latest/Customers.svg';
import TasksIcon from '../../../assets/icons/nav/latest/Tasks&Surveys.svg';
import ReportsIcon from '../../../assets/icons/nav/latest/Reports.svg';
import HappinessIcon from '../../../assets/icons/nav/latest/happiness.png';
import MessageIcon from '../../../assets/icons/nav/latest/message.png';

const Navigation = () => (
  <>
    {/* <NavCardItem link="/dashboard" /> */}
    <nav className="text-gray-500 fixed lg:top-32 2xl:top-52 group-hover:w-60">
      <ul className="flex flex-col ">
        <NavItem
          link="/dashboard"
          icon={DashboardIcon}
          label="Home"
        />

        <NavItem
          link="/manage"
          icon={HappinessIcon}
          label="Manage"
          hasSubItem
        >
          <NavSubItem link="/manage/sub1" label="Sub Item 1" />
          <NavSubItem link="/manage/sub2" label="Sub Item 2" />
          <NavSubItem link="sub2" label="Sub Item 3" />
          <NavSubItem link="sub2" label="Sub Item 4" />
          <NavSubItem link="sub2" label="Sub Item 5" />
        </NavItem>

        <NavItem
          link="/"
          icon={OrderManageIcon}
          label="Products"
          hasSubItem
        >
          <NavSubItem link="sub1" label="Sub Item 6" />
          <NavSubItem link="sub2" label="Sub Item 7" />
          <NavSubItem link="sub2" label="Sub Item 8" />
          <NavSubItem link="sub2" label="Sub Item 9" />
          <NavSubItem link="sub2" label="Sub Item 10" />
        </NavItem>

        <NavItem
          link="/"
          icon={ReportsIcon}
          label="Invoices"
        />

        <NavItem
          link="/"
          icon={MessageIcon}
          label="Messages"
        />

        <NavItem
          link="/"
          icon={TasksIcon}
          label="Calender"
        />

        <NavItem
          link="/"
          icon={CustomersIcon}
          label="Customers"
        />

        <NavItem
          link="/"
          icon={ManageIcon}
          label="Settings"
        />

      </ul>
    </nav>
  </>
);

export default Navigation;
