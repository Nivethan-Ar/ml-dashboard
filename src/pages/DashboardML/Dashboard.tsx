/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import Body from '../../layouts/Body';
import TopBar from '../../components/TopBar';
import TabLink from '../../components/TabLink';

const Dashboard = () => (
  <Body>
    <div className="flex flex-col gap-6 px-8 py-4">
      {/* TOP BAR */}
      <TopBar />

      <div className="flex justify-between">

        {/* TITLE */}
        <div className="flex flex-col items-baseline gap-2">
          <h6 className="[background-image:linear-gradient(60deg,#89cff2,#ce5efa)] bg-clip-text text-transparent font-semibold text-2xl">
            AI Dashboard
          </h6>
          <div className="flex justify-center text-blue-400 items-baseline gap-1">
            <p className="text-base font-medium">
              This Week
            </p>
            <p>
              <span>&#8964;</span>
            </p>
          </div>
        </div>

        {/* 3 Tabs on top left corner */}
        <div className="flex gap-0 h-10 border-b border-gray-600  text-gray-300 ">
          <TabLink
            link="/dashboard"
            label="Productivity"
          />

          <TabLink
            link="/dashboard/incentives"
            label="Incentives"
          />

          <TabLink
            link="/dashboard/development"
            label="Development"
          />
        </div>

      </div>

      <Outlet />

    </div>
  </Body>

);

export default Dashboard;
