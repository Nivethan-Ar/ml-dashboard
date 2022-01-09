import { NavLink } from 'react-router-dom';

const NavSubItem = (props:any) => {
  const { label, link } = props;
  return (
    <li className=" text-white font-normal text-gray-500 hover:font-bold hover:text-white">
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? 'text-white font-semibold' : '')}
      >
        <div>
          <h6>{label}</h6>
        </div>
      </NavLink>
    </li>
  );
};

export default NavSubItem;
