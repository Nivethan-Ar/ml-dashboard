/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../../app/store';
import { closeSidebar, openSidebar } from '../../features/sidebarSlice';
import Branding from './Branding';
import Navigation from './Navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const width = useSelector((state:Rootstate) => state.sidebar.width);

  const onMouseEnter = () => {
    dispatch(openSidebar());
  };

  const onMouseLeave = () => {
    dispatch(closeSidebar());
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: '#12162e' }}
      className={`h-screen ${width} fixed  group transition-all hover:duration-300 z-10`}
    >
      {/* Salessuite logo */}
      <Branding />

      {/* Navigation Items and Sub Items */}
      <Navigation />
    </div>
  );
};
export default Sidebar;
