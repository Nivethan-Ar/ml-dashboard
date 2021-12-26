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
          className="bg-[#152042] rounded-xl px-6 py-2 mx-3 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/70 text-white"
        >
          <div className="mb-[-8px]">
            <CardButton btnLabel="ALL NEW" />
          </div>
          <div className="flex mt-0 font-bold align-top">
            <div className="flex flex-col justify-center text-sm leading-snug tracking-wide">
              <h6>Artificial</h6>
              <h6>Intelligence</h6>
              <h6>Dashboard</h6>
            </div>
            <img className="w-20" src={CardIcon} alt="" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NavCardItem;
