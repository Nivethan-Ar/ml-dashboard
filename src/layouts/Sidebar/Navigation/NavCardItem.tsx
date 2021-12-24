import React from 'react';
import { Link } from 'react-router-dom';
import CardIcon from './ai.png';
import CardButton from '../../../components/CardButton';

const NavCardItem = (props:any) => {
  const { link } = props;
  return (
    <li>
      <Link to={link}>
        <div
          style={{ backgroundColor: '#152042' }}
          className="rounded-xl px-6 py-3 mx-3  text-white"
        >
          <CardButton btnLabel="ALL NEW" />
          <div className="flex mt-1 font-bold align-middle">
            <div className="flex text-sm flex-col justify-center leading-5">
              <h6 className="">Artificial</h6>
              <h6 className="">Intelligence</h6>
              <h6 className="">Dashboard</h6>
            </div>
            <img className="w-20" src={CardIcon} alt="" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NavCardItem;
