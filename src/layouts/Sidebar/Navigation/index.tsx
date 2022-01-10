/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';

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

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState('');
  return (
    <>
      {/* <NavCardItem link="/dashboard" /> */}
      <nav className="text-gray-500 fixed top-40 group-hover:w-56">
        <ul className="flex flex-col gap-8 ">
          <NavItem link="/dashboard" icon={DashboardIcon} label="Home" />
          <NavItem link="/manage" icon={HappinessIcon} label="Manage" hasSubItem>
            <NavSubItem link="/manage/sub1" label="Sub Item 1" />
            <NavSubItem link="/manage/sub2" label="Sub Item 2" />
            <NavSubItem link="sub2" label="Sub Item 3" />
            <NavSubItem link="sub2" label="Sub Item 4" />
            <NavSubItem link="sub2" label="Sub Item 5" />
          </NavItem>
          <NavItem link="/" icon={OrderManageIcon} label="Products" hasSubItem>
            <div>
              <NavSubItem link="sub1" label="Sub Item 1" />
              <NavSubItem link="sub2" label="Sub Item 2" />
              <NavSubItem link="sub2" label="Sub Item 3" />
              <NavSubItem link="sub2" label="Sub Item 4" />
              <NavSubItem link="sub2" label="Sub Item 5" />
            </div>
          </NavItem>
          <NavItem link="/" icon={ReportsIcon} label="Invoices" />
          <NavItem link="/" icon={MessageIcon} label="Messages" />
          <NavItem link="/" icon={TasksIcon} label="Calender" />
          <NavItem link="/" icon={CustomersIcon} label="Customers" />
          <NavItem link="/" icon={ManageIcon} label="Settings" />
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
