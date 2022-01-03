/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { login } from '../../features/userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const location:any = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || '/dashboard';

  const handleSubmit = async (e:React.SyntheticEvent) => {
    e.preventDefault();
    const loginCredentials = {
      username,
      password,
    };

    dispatch(login(loginCredentials, () => {
      navigate(from, { replace: true });
    }));
  };

  return (
    <div className="bg-gray-600 h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-white capitalize">login</h1>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input className="rounded-lg outline-none text-center" placeholder="username" type="text" name="" id="" onChange={(e) => setUsername(e.target.value)} />
        <input className="rounded-lg outline-none text-center" placeholder="password" type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="rounded-md outline-none bg-violet-600 hover:bg-violet-700 hover:font-semibold tracking-wide text-white py-1">
          Sign In
        </button>
      </form>

    </div>
  );
};

export default Login;
