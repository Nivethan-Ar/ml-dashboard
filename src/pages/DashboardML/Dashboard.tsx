import SearchIcon from '../../assets/icons/top-bar/search.svg';

const Dashboard = () => (
  <div
    style={{
      backgroundColor: '#7f53ac',
      backgroundImage: 'linear-gradient(315deg, #191d36 0%, #0f263e 64%)',
    }}
    className="h-[140vh] overflow-hidden text-white w-[calc(100vw_-_14rem)] "
  >
    {/* TOP BAR */}
    <div className="p-6">
      <form className="flex" action="" method="post">

        <img src={SearchIcon} className="w-10" alt="" />
        <input type="text" className="p-1 rounded-md" placeholder="Search" />

      </form>

    </div>
  </div>
);

export default Dashboard;
