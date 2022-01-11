import CardButton from '../../components/CardButton';
import GraphCard from '../../components/GraphCard';
import productiveVisitsGraph from '../../components/graphs/productiveVisitsGraph';
import ProductivityGraph from '../../components/graphs/ProductivityGraph';

const Productivity = () => (

  <main className="grid grid-cols-12 gap-x-8 gap-y-6">
    {/* card 1 */}
    <div className="col-span-6 grid relative flex-shrink-0 grid-cols-2  gap-2 w-auto p-6 tracking-wide bg-[#10172d] rounded-lg">
      <div>
        <h6 className="text-xs font-semibold">This Week&apos;s</h6>
        <h6 className="font-semibold">Productivity Score</h6>
      </div>

      <div className="text-xs font-light text-right">
        <p className="text-red-600"> -25 than expected</p>
        <p className="text-green-600"> +10 than last week</p>
      </div>

      <div className="text-7xl tracking-wider font-semibold">33</div>

      <div className="text-xs text-right font-light">
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
        <div className="text-4xl font-semibold ">
          70
        </div>
      </div>
      {/* <div className="flex mt-5 flex-col h-full justify-items-end items-end "> */}

      <div className="place-self-end [bottom:20px] [right:25px] absolute">
        <CardButton btnLabel="view in detail" />
      </div>
    </div>

    {/* Reusable cards */}
    <GraphCard
      GraphComp={productiveVisitsGraph}
      h1Type={2}
      h2="Productive Visits"
      colSpan="col-span-3"
    />

    <GraphCard
      GraphComp={productiveVisitsGraph}
      h1Type={2}
      h2="Productive Visits"
      colSpan="col-span-3"
    />

    <GraphCard
      GraphComp={ProductivityGraph}
      h1Type={1}
      h2="Productivity"
      colSpan="col-span-6"
    />

    <GraphCard
      GraphComp={productiveVisitsGraph}
      h1Type={2}
      h2="Productive Visits"
      colSpan="col-span-3"
    />

    <GraphCard
      GraphComp={productiveVisitsGraph}
      h1Type={2}
      h2="Productive Visits"
      colSpan="col-span-3"
    />

  </main>
);

export default Productivity;
