/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { closeSidebar } from '../../../features/sidebarSlice';

const NavSubItem = (props:any) => {
  const { label, link } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <li onClick={onClick} className=" font-normal text-gray-500 hover:font-bold hover:text-white">
      <NavLink
        to={link}
        // If the sub navigation item is already opened, show the label
        // on a Bold font for better UX
        className={
          ({ isActive }) => (isActive
            ? 'text-white font-semibold'
            : '')
        }
      >
        <div>
          <h6>{label}</h6>
        </div>
      </NavLink>
    </li>
  );
};

export default NavSubItem;
