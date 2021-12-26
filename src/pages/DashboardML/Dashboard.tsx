import SearchIcon from '../../assets/icons/top-bar/search.svg';
import CardButton from '../../components/CardButton';
import WaveIcon from './wave.svg';
import WaveIcon_2 from './wave-2.svg';

const Dashboard = () => (
  <div
    style={{
      backgroundColor: '#7f53ac',
      backgroundImage: 'linear-gradient(315deg, #191d36 0%, #0f263e 64%)',
    }}
    className="h-[140vh] flex flex-col gap-4 px-8 py-4 overflow-hidden text-white w-[calc(100vw_-_(14rem_+_14px))] "
  >
    {/* TOP BAR */}
    <div className="">
      <form className="flex" action="" method="post">

        <img src={SearchIcon} className="w-10" alt="" />
        <input type="text" className="p-1 rounded-md" placeholder="Search" />

      </form>
    </div>

    {/* TITLE */}
    <div className="">
      <div className="flex items-baseline gap-4">
        <h6 className="[background-image:linear-gradient(60deg,#89cff2,#ce5efa)] [background-clip:text] [color:transparent] font-semibold text-2xl">AI Dashboard</h6>
        <div>
          <p className="text-xs">This Week</p>
        </div>
      </div>
    </div>

    {/* CARDS */}
    <main className="flex overflow-x-auto gap-8 ">

      <div className="grid flex-shrink-0 grid-cols-2  gap-2 w-fit p-6 tracking-wide bg-[#10172d] h-fit rounded-lg">
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
        <div className="flex mt-5 flex-col h-full justify-items-end items-end ">
          <CardButton btnLabel="view in detail" />
        </div>
      </div>

      {/* reusable cards */}
      <div
        style={{ backgroundImage: `url(${WaveIcon})`, backgroundPosition: 'top 30px right' }}
        className="bg-[#10172d] grid flex-shrink-0 tracking-wide rounded-lg w-64 p-6 tracking-wider"
      >
        <div>
          <div className="text-sm">
            <h6>
              <span className="text-blue-400">Estimated </span>
              vs
              <span className="text-green-400"> Achieved</span>
            </h6>
          </div>
          <h6 className="font-medium">Productivity</h6>
        </div>
        <div className="place-self-end mb-2">
          <CardButton btnLabel="view in detail" />
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${WaveIcon_2})`, backgroundPosition: 'top 30px right' }}
        className="bg-[#10172d] grid flex-shrink-0 tracking-wide rounded-lg w-64 p-6 tracking-wider"
      >
        <div>
          <div className="text-sm">
            <h6>
              <span className="">Number of </span>
              {/* <span className="text-green-400"></span> */}
            </h6>
          </div>
          <h6 className="font-medium">Productive Visits</h6>
        </div>
        <div className="place-self-end mb-2">
          <CardButton btnLabel="view in detail" />
        </div>
      </div>

      <div className="bg-[#10172d] grid flex-shrink-0 tracking-wide rounded-lg w-64 p-6 tracking-wider">
        <div>
          <div className="text-sm">
            <h6>
              <span className="text-blue-400">Estimated </span>
              vs
              <span className="text-green-400"> Achieved</span>
            </h6>
          </div>
          <h6 className="font-medium">Productivity</h6>
        </div>
        <div className="place-self-end mb-2">
          <CardButton btnLabel="view in detail" />
        </div>
      </div>

      <div className="bg-[#10172d] grid flex-shrink-0 tracking-wide rounded-lg w-64 p-6 tracking-wider">
        <div>
          <div className="text-sm">
            <h6>
              <span className="text-blue-400">Estimated </span>
              vs
              <span className="text-green-400"> Achieved</span>
            </h6>
          </div>
          <h6 className="font-medium">Productivity</h6>
        </div>
        <div className="place-self-end mb-2">
          <CardButton btnLabel="view in detail" />
        </div>
      </div>

    </main>

  </div>
);

export default Dashboard;
