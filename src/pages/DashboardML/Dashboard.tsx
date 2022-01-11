/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import CardButton from '../../components/CardButton';
import Body from '../../layouts/Body';
import TopBar from '../../components/TopBar';
import ProductivityGraph from '../../components/graphs/ProductivityGraph';
import productiveVisitsGraph from '../../components/graphs/productiveVisitsGraph';
import GraphCard from '../../components/GraphCard';

import WaveIcon_2 from './wave-2.svg';
import WaveIcon from './wave.svg';
import Productivity from './Productivity';

const Dashboard = () => (
  <Body>
    <div
      style={{
        backgroundColor: '#7f53ac',
        backgroundImage: 'linear-gradient(315deg, #191d36 0%, #0f263e 64%)',
      }}
      className="h-[140vh] flex flex-col gap-6 px-8 py-4 overflow-hidden w-[calc(100vw_-_(4rem_+_14px))] text-white "
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
          <h6 className="hover:border-b-4 h-[41px] px-6 border-current hover:text-cyan-300 hover:font-medium">Productivity</h6>
          <h6 className="hover:border-b-4 h-[41px] px-6 border-b-0 border-current hover:text-cyan-300 hover:font-medium">Incentives</h6>
          <h6 className="hover:border-b-4 h-[41px] px-6 border-current hover:text-cyan-300 hover:font-medium">Developement</h6>
        </div>
      </div>

      {/* CARDS */}
      <Productivity />

    </div>
  </Body>

);

export default Dashboard;
