import Sidebar from '../Sidebar';

const Body = ({ children }:any) => (

  <div>
    <div className="flex">
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  </div>
);

export default Body;
