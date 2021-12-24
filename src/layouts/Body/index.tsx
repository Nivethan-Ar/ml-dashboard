import Sidebar from '../Sidebar';

const Body = ({ children }:any) => (

  <div>
    {/* <p>i&apos;m parent</p> */}
    <div className="flex">
      <Sidebar />
      <div className="max-w-3xl">
        {children}
      </div>
    </div>
  </div>
);

export default Body;
