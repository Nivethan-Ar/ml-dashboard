/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';

import { Rootstate } from '../app/store';
import { logout } from '../features/userSlice';
import SearchIcon from '../assets/icons/top-bar/search.svg';
import avatarIcon from '../assets/icons/top-bar/man.png';

const TopBar = () => {
  const user = useSelector((state:Rootstate) => state.userAuth.user);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <form action="" method="post">
        <div className="relative flex items-center">
          <img src={SearchIcon} className="w-4 ml-4 absolute pointer-events-none [filter:invert(1)]" alt="" />
          <input type="text" className=" bg-[#12162e] pl-12 w-44 py-2 rounded-lg placeholder-slate-400 border-none tracking-wider text-xs outline-none text-white focus:ring-2 focus:ring-[#223262] " placeholder="Search" />
        </div>
      </form>

      {user && (
      <div className="">
        <div className="flex gap-1">
          <img src={avatarIcon} alt="user" className="w-7" />
          {user.username}
          {/* <img src={logoutIcon} onClick={() => dispatch(logout())} alt="logout" className="w-7 h-7" /> */}
          <button type="button" onClick={() => dispatch(logout())} className="bg-violet-800 font-semibold ml-2 rounded-md px-4 shadow-xl">Logout</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default TopBar;
