import Sidebar from './Sidebar';

const Layout = ({ children }:any) => (

  <div>
    <p>i&apos;m parent</p>
    <div>
      <Sidebar />
      <div style={{ maxWidth: '800px' }}>
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
