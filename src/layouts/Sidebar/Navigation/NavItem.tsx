import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import arrowIcon from './right-arrow.png';

const NavItem = (props:any) => {
  const {
    icon, label, link, children, hasSubItem,
  } = props;

  const [subNavShow, setSubNavShow] = useState(false);

  const onMouseEnter = () => {
    setSubNavShow(true);
  };

  const onMouseLeave = () => {
    setSubNavShow(false);
  };

  return (
    <li
      className="hover:text-white py-6 hover:font-bold cursor-pointer relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavLink
        to={link}
        // If the main navigation Item is already opened, show the sidebar label
        // on a Bold font for better UX
        className={
          ({ isActive }) => (isActive
            ? 'text-white font-semibold'
            : '')
        }
      >
        <div
          className="flex pl-6 items-center"
        >
          <img className="w-5 mr-2" src={icon} alt="navigation icon" />
          <span className="text-sm hidden group-hover:block ">{label}</span>
          {/* <img src={arrowIcon} className="w-2 hidden group-hover:block"/> */}
        </div>
      </NavLink>

      {/* Render Sub Navigation Items */}
      {subNavShow && hasSubItem && (
        <ul
          className="absolute left-56 ml-2 w-max px-8 py-4 space-y-4 text-sm top-0 rounded-md bg-gray-300"
        >
          {children}
        </ul>
      )}

    </li>
  );
};

export default NavItem;
