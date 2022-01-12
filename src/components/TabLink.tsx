/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

interface Props{
  link:string
  label:string
}

const TabLink:React.FC<Props> = (props) => {
  const { link, label } = props;
  return (
    <NavLink
      end
      to={link}
      className={
      ({ isActive }) => (isActive
        ? 'text-cyan-400 border-b-4 h-10 border-current font-medium'
        : '')
      }
    >

      <h6 className="hover:border-b-4 h-10 px-6 border-current hover:text-cyan-300 hover:font-medium">
        {label}

      </h6>
    </NavLink>
  );
};

export default TabLink;
