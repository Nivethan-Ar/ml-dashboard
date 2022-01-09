/* eslint-disable @typescript-eslint/no-unused-vars */
// import SidebarItems from './SidebarItems';
import Branding from './Branding';
import Navigation from './Navigation';

const Sidebar = () => (

  <div
    style={{ backgroundColor: '#12162e' }}
    className="h-screen w-16 fixed hover:w-56 group transition-all hover:duration-300 z-10 "
  >
    <Branding />
    <Navigation />
  </div>
);

export default Sidebar;
