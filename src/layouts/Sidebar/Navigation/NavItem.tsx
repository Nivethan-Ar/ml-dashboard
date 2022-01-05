import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props:any) => {
  const { icon, label, link } = props;
  return (
    <li className="hover:text-white hover:font-bold cursor-pointer">
      <Link to={link}>
        <div className="flex pl-3 items-center">
          <img className="w-5 mr-2" src={icon} alt="navigation icon" />
          <span className="text-xs">{label}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
