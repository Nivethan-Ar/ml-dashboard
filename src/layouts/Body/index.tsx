import Sidebar from '../Sidebar';

const Body = ({ children }:any) => (

  <div>
    <div className="flex">
      <Sidebar />
      <div
        style={{
          backgroundColor: '#7f53ac',
          backgroundImage: 'linear-gradient(315deg, #191d36 0%, #0f263e 64%)',
        }}
        className="ml-16 h-[160vh] text-white w-[calc(100vw_-_(4rem_+_12px))]"
      >
        {children}
      </div>
    </div>
  </div>
);

export default Body;
