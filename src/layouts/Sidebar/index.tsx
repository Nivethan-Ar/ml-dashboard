// import { Link } from 'react-router-dom';
// import SidebarItems from './SidebarItems';
import Branding from './Branding';
import Navigation from './Navigation';

const Sidebar = () => (

  <div className=" w-1/6">

    <div
      style={{ backgroundColor: '#12162e' }}
      className="fixed bg-blue-900 h-screen w-1/6 "
    >
      <Branding />
      <Navigation />
    </div>
  </div>
);

export default Sidebar;
