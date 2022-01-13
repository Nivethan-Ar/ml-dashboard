const Incentives = () => {
  const headerLabels = [
    'Agent Name',
    'Target',
    'Achievement',
    'Suggested Target',
    'Suggested Incentive',
    'Predicted Sales Impact',
  ];

  const tableHeader = headerLabels.map((label) => (
    <div><h6>{label}</h6></div>
  ));

  const data = [
    {
      agentName: 'Barrows Michel',
      target: '38,415 LKR',
      achievement: '38,415 LKR',
      suggTarget: '38,415 LKR',
      suggIncentive: '510.50 LKR',
      pSalesImpact: '+20%',
    },
    {
      agentName: 'Osinski Willow',
      target: '19,962 LKR',
      achievement: '19,962 LKR',
      suggTarget: '19,962 LKR',
      suggIncentive: '510.50 LKR',
      pSalesImpact: '+1.5%',
    },
    {
      agentName: 'Gerhold Emmy',
      target: '12,532 LKR',
      achievement: '12,532 LKR',
      suggTarget: '12,532 LKR',
      suggIncentive: '510.50 LKR',
      pSalesImpact: '+44%',
    },
  ];

  const tableData = data.map((d) => (
    <>
      <div className=""><h6>{d.agentName}</h6></div>
      <div className=""><h6>{d.target}</h6></div>
      <div className=""><h6>{d.achievement}</h6></div>
      <div className=""><h6>{d.suggTarget}</h6></div>
      <div className=""><h6>{d.suggIncentive}</h6></div>
      <div className="text-green-400 "><h6>{d.pSalesImpact}</h6></div>
      <button
        type="button"
        className="border border-rose-500 rounded-md px-4 py-2 font-bold text-[0.55rem] text-red-600"
      >
        Set Dynamic Target
      </button>
    </>
  ));
  return (
  // Grid approach
    <div className="border border-slate-700 rounded-lg bg-slate-900 bg-opacity-20 bg-transparent">
      <div className="grid grid-cols-7 place-items-center gap-x-2 text-sm border-b py-6  font-semibold border-slate-700">
        {tableHeader}
      </div>

      <div className=" grid grid-cols-7 place-items-center gap-x-0 gap-y-10 text-xs py-8 ">
        {tableData}
        {tableData}
        {tableData}
      </div>

    </div>
  );
};

export default Incentives;
