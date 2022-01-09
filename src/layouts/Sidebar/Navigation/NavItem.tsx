/* eslint-disable max-len */
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
    <li className="hover:text-white hover:font-bold cursor-pointer relative">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? 'text-white font-semibold' : '')}
      >
        <div className="flex pl-6 items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <img className="w-5 mr-2" src={icon} alt="navigation icon" />
          <span className="text-sm hidden group-hover:block ">{label}</span>
          {/* <img src={arrowIcon} className="w-2 hidden group-hover:block" alt="" /> */}
        </div>
      </NavLink>
      {subNavShow && hasSubItem && (
        <ul className=" absolute left-32 w-max px-2 py-1 top-0 rounded-md bg-gray-300 " onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {children}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
