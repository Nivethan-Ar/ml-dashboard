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
          <div className="flex justify-center items-baseline gap-1">
            <p className="text-[12px] font-medium">
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
      <main className="flex flex-wrap gap-8 ">

        <div className="grid relative flex-shrink-0 grid-cols-2  gap-2 w-fit p-6 tracking-wide bg-[#10172d] h-fit rounded-lg">
          <div>
            <h6 className="text-xs">This Week&apos;s</h6>
            <h6 className="font-medium">Productivity Score</h6>
          </div>
          <div className="text-xs font-light">
            <p className="text-red-600"> -25 than expected</p>
            <p className="text-green-600"> +10 than last week</p>
          </div>
          <div className="text-7xl font-semibold">33</div>
          <div className="text-xs font-light">
            <p>Less than average productive visits</p>
            <p>Less than average lead times</p>
            <p>More than average task completion</p>
            <p>Average active hours</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-baseline">
              <h6 className="text-xs">Next Week&apos;s</h6>
              <h6 className="font-medium">Highest Achievable</h6>
            </div>
            <div className="text-4xl font-semibold self-end">
              70
            </div>
          </div>
          {/* <div className="flex mt-5 flex-col h-full justify-items-end items-end "> */}

          <div className="place-self-end [bottom:20px] [right:20px] absolute">
            <CardButton btnLabel="view in detail" />
          </div>
        </div>

        {/* Reusable cards */}

        <GraphCard
          GraphComp={ProductivityGraph}
          h1Type={1}
          h2="Productivity"
        />

        <GraphCard
          GraphComp={productiveVisitsGraph}
          h1Type={2}
          h2="Productive Visits"
        />

      </main>

    </div>
  </Body>

);

export default Dashboard;
