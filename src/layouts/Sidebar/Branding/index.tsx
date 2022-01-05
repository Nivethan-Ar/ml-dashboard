import logo from './salessuite-logo-dark.png';
import MenuIcon from './menu.png';

const Branding = () => (
  <div className="mt-5 mb-6 p-2 flex items-center justify-between w-full">
    <img src={logo} alt="salessuite logo" className="w-4/6" />
    <img src={MenuIcon} className="w-4 h-5" alt="menu icon" />
  </div>
);

export default Branding;
