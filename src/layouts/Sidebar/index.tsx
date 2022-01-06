// import { Link } from 'react-router-dom';
// import SidebarItems from './SidebarItems';
import Branding from './Branding';
import Navigation from './Navigation';

const Sidebar = () => (

  <div className="w-56">
    <div
      style={{ backgroundColor: '#12162e' }}
      className="fixed h-screen w-56 "
    >
      <Branding />
      <Navigation />
    </div>
  </div>
);

export default Sidebar;
