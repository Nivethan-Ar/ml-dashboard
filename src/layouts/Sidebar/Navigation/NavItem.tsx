import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props:any) => {
  const { icon, label, link } = props;
  return (
    <li className="hover:text-white cursor-pointer">
      <Link to={link}>
        <div className="flex pl-3">
          <img className="w-5 mr-2" src={icon} alt="navigation icon" />
          <span>{label}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
