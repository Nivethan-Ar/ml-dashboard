import Sidebar from '../Sidebar';

const Body = ({ children }:any) => (

  <div>
    <div className="flex">
      <Sidebar />
      <div className="ml-16">
        {children}
      </div>
    </div>
  </div>
);

export default Body;
