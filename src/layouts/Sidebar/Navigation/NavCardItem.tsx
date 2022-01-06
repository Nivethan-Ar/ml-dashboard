/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import CardIcon from './ai.png';
// import CardIcon2 from './head.png';
import CardButton from '../../../components/CardButton';

const NavCardItem = (props:any) => {
  const { link } = props;
  return (
    <li>
      <Link to={link}>
        <div
          className="bg-[#152042] rounded-xl pl-5 pt-4 pb-2 mx-2 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/70 text-white"
        >
          <div className="">
            <CardButton btnLabel="ALL NEW" />
          </div>
          <div className="flex mt-0 font-bold align-top gap-2">
            <div className="flex flex-col justify-center text-sm leading-snug tracking-wider">
              <h6>Artificial</h6>
              <h6>Intelligence</h6>
              <h6>Dashboard</h6>
            </div>
            <img className="w-[5.5rem] " src={CardIcon} alt="" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NavCardItem;
