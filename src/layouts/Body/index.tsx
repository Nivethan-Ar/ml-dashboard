import Sidebar from '../Sidebar';

const Body = ({ children }:any) => (

  <div>
    {/* <p>i&apos;m parent</p> */}
    <div className="flex">
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  </div>
);

export default Body;
