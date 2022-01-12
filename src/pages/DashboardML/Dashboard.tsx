/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import Body from '../../layouts/Body';
import TopBar from '../../components/TopBar';
import TabLink from '../../components/TabLink';

const Dashboard = () => (
  <Body>
    <div
      style={{
        backgroundColor: '#7f53ac',
        backgroundImage: 'linear-gradient(315deg, #191d36 0%, #0f263e 64%)',
      }}
      className="h-[140vh] flex flex-col gap-6 px-8 py-4 overflow-hidden w-[calc(100vw_-_(4rem_+_12px))] text-white "
    >
      {/* TOP BAR */}
      <TopBar />

      {/* TITLE */}
      <div className="flex justify-between">
        <div className="flex flex-col items-baseline gap-2">
          <h6 className="[background-image:linear-gradient(60deg,#89cff2,#ce5efa)] [background-clip:text] [color:transparent] font-semibold text-2xl">
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

      {/* CARDS */}
      {/* <Productivity /> */}
      <Outlet />

    </div>
  </Body>

);

export default Dashboard;
